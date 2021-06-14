(ns behumen.routes.home
  (:require
   [behumen.layout :as layout]
   [behumen.db.core :as db]
   [clojure.java.io :as io]
   [behumen.middleware :as middleware]
   [ring.util.response]
   [ring.util.http-response :as response]))


(defn home-page [request]
  (layout/render request "app.tmpl"))

(defn home-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/" {:get home-page}]])
