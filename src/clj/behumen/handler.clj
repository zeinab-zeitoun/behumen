(ns behumen.handler
  (:require
    [behumen.middleware :as middleware]
    [behumen.layout :refer [error-page]]
    [behumen.routes.home :refer [home-routes home-page]]
    [behumen.routes.services :refer [service-routes]]
    [reitit.swagger-ui :as swagger-ui]
    [behumen.routes.def :refer [get-routes]]
    [reitit.ring :as ring]
    [reitit.ring.coercion :as coercion]
    [reitit.coercion.spec]
    [ring.middleware.content-type :refer [wrap-content-type]]
    [ring.middleware.webjars :refer [wrap-webjars]]
    [reitit.ring.middleware.muuntaja :as muuntaja]
    [reitit.ring.middleware.multipart :as multipart]
    [reitit.ring.middleware.parameters :as parameters]
    [behumen.middleware.formats :as formats]
    [behumen.middleware.exception :as exception]
    [buddy.sign.jwt :as jwt]
    [behumen.env :refer [defaults]]
    [mount.core :as mount]))

(mount/defstate init-app
  :start ((or (:init defaults) (fn [])))
  :stop  ((or (:stop defaults) (fn []))))

(mount/defstate app-routes
  :start
  (ring/ring-handler
    (ring/router
      [(home-routes)
       (service-routes)
       (get-routes)]
     {:data {:coercion reitit.coercion.spec/coercion
             :muuntaja formats/instance
             :middleware [;; query-params & form-params
                          parameters/parameters-middleware
                          ;; content-negotiation
                          muuntaja/format-negotiate-middleware
                          ;; encoding response body
                          muuntaja/format-response-middleware
                          ;; exception handling
                          exception/exception-middleware
                          ;; decoding request body
                          muuntaja/format-request-middleware
                          ;; multipart
                          multipart/multipart-middleware]}})
    (ring/routes
      (ring/create-resource-handler
        {:path "/"})
      (wrap-content-type
        (wrap-webjars (constantly nil)))
      (ring/create-default-handler
       {:not-found
        (constantly (home-page nil))
        :method-not-allowed
        (constantly (error-page {:status 405, :title "405 - Not allowed"}))
        :not-acceptable
         (constantly (error-page {:status 406, :title "406 - Not acceptable"}))}))))

(defn app []
  (middleware/wrap-base #'app-routes))
