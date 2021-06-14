(ns behumen.routes
  (:require [reitit.core :as reitit]
            [behumen.common :as common]
            [behumen.views.home :as home]
            [re-frame.core :as rf
             :refer [dispatch reg-event-db subscribe]]))

(def routes
  {"/" {:type :landing-page :name :landing-page}})

(def reitit-routes
  (reitit/router (for [[url route] routes]
                   [url route])))

(defn get-route-by-url [url]
  (get routes url))

(defn get-route-by-name [page]
  (:path (reitit/match-by-name reitit-routes page)))
