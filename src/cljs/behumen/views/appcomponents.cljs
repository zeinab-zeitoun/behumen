(ns behumen.views.appcomponents
  (:require [re-frame.core :refer [dispatch subscribe reg-event-db reg-sub]] 
            [reagent-material-ui.core.grid :refer [grid]]
            [reagent-material-ui.core.box :refer [box]]
            [reagent-material-ui.core.button :refer [button]]
            [reagent-material-ui.styles :refer [make-styles]]))

(def use-styles
  (make-styles (fn [theme]
                  {:align-items-center {:align-items "center"}})))

(defn category-container [image-component details-component]
  (let [styles (use-styles)]
    [grid {:container true
           :className (:align-items-center (use-styles))}
     [grid {:item true
            :md 6
            :xs 12}
      image-component]
     [grid {:item true
            :md 6
            :xs 12}
      details-component]]))
