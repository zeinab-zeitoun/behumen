(ns behumen.views.appcomponents
  (:require [re-frame.core :refer [dispatch subscribe reg-event-db reg-sub]] 
            [reagent-material-ui.core.grid :refer [grid]]
            [reagent-material-ui.core.box :refer [box]]
            [reagent-material-ui.core.button :refer [button]]
            [reagent-material-ui.styles :refer [make-styles]]
            [reagent-material-ui.core.hidden :refer [hidden]]))

(def use-styles
  (make-styles (fn [theme]
                  {:align-items-center {:align-items "center"}})))

(defn category-container-odd-position [image details]
  (let [styles (use-styles)]
    [grid {:container true
           :className (:align-items-center (use-styles))}
     [grid {:item true
            :md 6
            :xs 12}
      image]
     [grid {:item true
            :md 6
            :xs 12}
      details]]))

(defn category-container-even-position [details image]
  [box
   [hidden {:sm-down true}
    [category-container-odd-position details image]]
   [hidden {:md-up true}
    [category-container-odd-position image details]]])
