(ns behumen.utils
  (:require 
            [reagent.core :as r]
            [clojure.string :as str]
            [clojure.edn :as edn]
            [goog.history.Html5History :as html5]
            [re-frame.core :refer [dispatch reg-event-db subscribe]]))

(defn save-local-item [key val]
  (.setItem (.-localStorage js/window) key (.stringify js/JSON val)))

(defn get-local-item [key]
  (.parse js/JSON (.getItem (.-localStorage js/window) key)))

(defn remove-local-item [key]
  (.removeItem (.-localStorage js/window) key))

(defn get-token []
  (if (html5/isSupported )
    (str js/window.location.pathname js/window.location.search)
    (if (= js/window.location.pathname "/")
      (.substring js/window.location.hash 1)
      (str js/window.location.pathname js/window.location.search))))
