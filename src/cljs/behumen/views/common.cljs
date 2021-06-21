(ns behumen.views.common
  (:require [reagent-material-ui.styles :refer [make-styles]]
            [reagent-material-ui.core.app-bar :refer [app-bar]]
            [reagent-material-ui.core.container :refer [container]]
            [reagent-material-ui.core.typography :refer [typography]]
            [reagent-material-ui.core.grid :refer [grid]]
            [reagent-material-ui.core.button :refer [button]]
            [rams-ui.components.menu :refer [icon-menu]]
            [reagent-material-ui.icons.flare :refer [flare]]))

(def use-styles
  (make-styles (fn [theme]
                 {:space-between {:flex-direction "row"
                                  :display "flex"
                                  :justify-content "space-between"
                                  :align-items "center"}
                  :logo {:padding "1.4rem"
                         :width "10%"
                         "@media (max-width:1500px)"
                         {:width "15%"}
                         "@media (max-width:1200px)"
                         {:width "17%"}
                         "@media (max-width:600px)"
                         {:width "25%"
                          :padding "1.2rem"}}
                  :button-menu {:color "white"
                                :font-size "1.1rem"}})))

(defn scrollTo [component-id]
  (if-let [element (js/document.getElementById component-id)]
    (js/element.scrollIntoView false)))

(defn behumen-symbol [class]
  [:img {:src "/img/behumen_symbol.ico"
         :class class}])

(defn appbar []
  (let [styles (use-styles)]
    [app-bar {:position "sticky"}
     [container {:className (:space-between styles)}
      [:img {:src "/img/behumen-logo.png"
            
             :class (:logo styles)}]
      [icon-menu {:icon [typography {:classes {:root (:button-menu styles)}}
                         "WHAT WE TREAT"]}
       [{:label "Sexual Health"
         :icon [behumen-symbol {}]
         :on-click #(scrollTo "sexual-health")}
        {:label "Daily Health"
         :icon [behumen-symbol {}]
         :on-click #(scrollTo "daily-health")}
        {:label "Skin & Hair"
         :icon [behumen-symbol {}]
         :on-click #(scrollTo "skin-and-hair")}
        {:label "Metabolic Health & Weight Management"
         :icon [behumen-symbol {}]
         :on-click #(scrollTo "metabolic-health-and-weight-management")}]]]]))

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
