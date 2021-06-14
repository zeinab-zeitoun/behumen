(ns behumen.common
  (:require #?(:clj [behumen.config :refer [env]]))
  #?(:clj (:import [java.net URLEncoder])))

(def uploaded-url-path "/uploaded/")

(def +success+ "success")
(def +warning+ "warning")
(def +error+ "error")

(def +roles-module+ "roles")

(def +permission-read+ "read")
(def +permission-write+ "write")
(def +permission-delete+ "delete")

(defn get-server-name []
  #?(:clj (str (if (env :server-name)
                 (env :server-name) "localhost")
               (when (env :port)
                 (str ":" (env :port))))
     :cljs "localhost:3000"))

(defn get-base-url []
  (str #?(:clj (if (:dev env) "http://" "https://")
          :cljs "https://")
       (get-server-name)))

(def urls {:user-verify "/verification/:code"
           :user-change-password "/change-password/:code"
           :change-my-password "/api/v1/private/user/change-password"
           :login "/api/v1/public/user/login"
           :reset-password "/api/v1/public/user/reset"
           :roles-view "/api/v1/private/roles/view"
           :user-permissions-view "/api/v1/private/permissions/user-view"
           :user-permissions-save "/api/v1/private/permissions/user-save"
           :logout "/api/v1/private/user/logout"
           :save-email "/api/v1/private/user/save-email"})

(defn get-url [id]
  (id urls))

(defn url-encode
  [string]
  #?(:clj
     (some-> string str (URLEncoder/encode "UTF-8") (.replace "+" "%20"))
     :cljs
     (some-> string str (js/encodeURIComponent) (.replace "+" "%20"))))

(defn generate-url [id & args]
  (let [coded-url (id urls)]
    (if coded-url
      (if (or (empty? args)
              (empty? (first args)))
        coded-url
        (let [new-args (into {} (for [[k v] (first args)]
                                  [(str ":" (if (keyword?  k)
                                              (name k)
                                              k)
                                        "/")
                                   (str  v "/")]))
              search-query (loop [items (first args)
                                  out ""]
                             (if (empty? items)
                               (if (= out "") out (str "?" out))
                               (recur (rest items)
                                      (let [[k v] (first items)
                                            key-name (if (keyword? k) (name k) k)]
                                        (if (re-find (re-pattern (str ":" key-name "/"))
                                                     (str coded-url "/"))
                                          out
                                          (str (if (= out "") out (str out "&"))
                                               key-name "="
                                               (url-encode (str v))))))))
              url  (clojure.string/replace
                    (str coded-url "/")
                    (re-pattern
                     (apply str
                            (interpose "|" (keys new-args))))
                    new-args)]
          (str (subs url 0 (- (count url) 1)) search-query))))))

(defn get-absolute-url [id & args]
  (str (get-base-url) (generate-url id (first args))))

(defn get-ws-url [id & args]
  (str "ws://" (get-server-name)
       (generate-url id (first args))))

(defn get-image-link [link]
  (str uploaded-url-path link))

(defn get-absolute-image-link [link]
  (str (get-base-url) uploaded-url-path
       link))
