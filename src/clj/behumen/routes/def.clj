(ns behumen.routes.def
  (:require [clojure.tools.logging :as log]
            [mount.core :as mount]
            [clj-time.core :as tcore]
            [web-middleware.core :refer [set-lib-params]]
            [behumen.common :as common]
            [buddy.sign.jwt :as jwt]
            [behumen.db.core :as db]
            [behumen.config :refer [env]]))

(mount/start #'behumen.config/env)

(set-lib-params :jwt-func 
                (fn [token key]
                  (let [result (jwt/unsign token key)]
                    (if (:exp result)
                      (when (> (:exp result) (tcore/epoch))
                        result)
                      result))))
(set-lib-params :url-func (fn [key]
                            (str (common/get-url key))))
(set-lib-params :permission-levels [])
(set-lib-params :jwt-secret (env :jwt-secret))

(set-lib-params :default-response {:status {:#type# string?
                                            :#checker# #(some (fn [stat] (= % stat))
                                                              [common/+success+ common/+error+
                                                               common/+warning+])}})



(let [routes (atom {})]

  (defn get-routes []
    (into [] (vals @routes)))
  
  (defn add-to-routes [url method]
    (reset! routes (merge @routes {url method}))))
