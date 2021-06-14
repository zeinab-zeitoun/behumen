(ns behumen.layout
  (:require
    [clojure.java.io]
    [selmer.parser :as parser]
    [selmer.filters :as filters]
    [web-middleware.helpers :as helpers]
    [behumen.config :refer [env]]
    [ring.util.http-response :refer [content-type ok]]
    [ring.util.anti-forgery :refer [anti-forgery-field]]
    [ring.middleware.anti-forgery :refer [*anti-forgery-token*]]
    [ring.util.response]))

(parser/set-resource-path!  (clojure.java.io/resource "templates"))
(parser/add-tag! :csrf-field (fn [_ _] (anti-forgery-field)))
(filters/add-filter! :get-key-as-str (fn [item & extra-keys]
                                       (get-in item extra-keys)))
(filters/add-filter! :get-key (fn [item & extra-keys]
                                (get-in item (into []
                                                   (for [arg  extra-keys]
                                                     (keyword arg))))))
(filters/add-filter! :mod (fn [value divider]
                            (mod (helpers/parse-int value)
                                 (helpers/parse-int divider))))

(defn render
  "renders the HTML template located relative to resources/html"
  [request template & [params]]
  (content-type
    (ok
      (parser/render-file
        template
        (assoc params
               :google-key (env :google-key)
               :page template
               :csrf-token *anti-forgery-token*)))
    "text/html; charset=utf-8"))

(defn error-page
  "error-details should be a map containing the following keys:
   :status - error status
   :title - error title (optional)
   :message - detailed error message (optional)

   returns a response map with the error page as the body
   and the status specified by the status key"
  [error-details]
  {:status  (:status error-details)
   :headers {"Content-Type" "text/html; charset=utf-8"}
   :body    (parser/render-file "error.tmpl" error-details)})
