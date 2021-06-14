(ns behumen.views.common
  (:require [reagent-material-ui.styles :refer [make-styles with-styles]]
            [reagent-material-ui.core.app-bar :refer [app-bar]]
            [reagent-material-ui.core.container :refer [container]]
            [reagent-material-ui.core.typography :refer [typography]]
            [reagent-material-ui.core.container :refer [container]]
            [reagent-material-ui.core.grid :refer [grid]]))

(def use-styles
  (make-styles (fn [theme]
                 {:space-between {:flex-direction "row"
                                  :display "flex"
                                  :justify-content "space-between"
                                  :align-items "center"}
                  :logo {:padding "1.4rem"
                         :width "12%"
                         "@media (max-width:1500px)"
                         {:width "15%"}
                         "@media (max-width:1200px)"
                         {:width "20%"}
                         "@media (max-width:600px)"
                         {:width "30%"
                          :padding "1.4rem"}}})))

(defn appbar []
  (let [styles (use-styles)]
    [app-bar
     [container {:className (:space-between styles)}
      [:img {:src "/img/behumen_logo.png"
             :class (:logo styles)}]]]))

(defn app-container [component]
  [grid
   {:container true}
   [grid {:item true
          :lg 2
          :sm 1}]
   [grid {:item true
          :lg 8
          :sm 10
          :xs 12}
    component]
   [grid {:item true
          :lg 2
          :sm 1}]])

(defn break []
  [:div {:style {:height "4rem"}}])

(defn footer []
   [:div {:style {:background "#001e62" :height "5rem" :margin-top "4rem"}}])
