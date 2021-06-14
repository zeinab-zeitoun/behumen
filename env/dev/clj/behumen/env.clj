(ns behumen.env
  (:require
    [selmer.parser :as parser]
    [clojure.tools.logging :as log]
    [behumen.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[behumen started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[behumen has shut down successfully]=-"))
   :middleware wrap-dev})
