(ns behumen.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[behumen started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[behumen has shut down successfully]=-"))
   :middleware identity})
