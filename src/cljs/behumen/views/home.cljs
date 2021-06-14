(ns behumen.views.home
  (:require [re-frame.core :refer [dispatch subscribe reg-event-db reg-sub]]
            [behumen.utils :refer [get-local-item save-local-item]]
            [ajax.core :as cajax :refer [GET POST PUT]]
            [reagent.core :as reagent :refer [atom with-let]]
            [behumen.common :as common]
            [behumen.translation :refer [tr]]
            [bouncer.core :as b]
            [rams-ui.util :refer [set-value get-value gen-uuid]]
            [behumen.utils :as utils]
            [behumen.views.appcomponents :refer [category-container]]
            [behumen.views.common :refer [app-container appbar footer break]]
            [behumen.validation :refer [email-validation]]
            [rams-ui.components.cards :refer [card]]
            [rams-ui.components.dialog :refer [modal]]
            [reagent-material-ui.core.box :refer [box]]
            [reagent-material-ui.core.typography :refer [typography]]
            [reagent-material-ui.styles :refer [make-styles with-styles]]
            [reagent-material-ui.core.text-field :refer [text-field]]
            [reagent-material-ui.core.container :refer [container]]
            [reagent-material-ui.core.hidden :refer [hidden]]
            [reagent-material-ui.core.grid :refer [grid]]
            [reagent-material-ui.core.button :refer [button]]
            [reagent-material-ui.core.snackbar :refer [snackbar]]
            [reagent-material-ui.core.dialog :refer [dialog]]
            [reagent-material-ui.core.dialog-title :refer [dialog-title]]
            [reagent-material-ui.lab.alert :refer [alert]]
            [reagent-material-ui.lab.alert-title :refer [alert-title]]
            [reagent-material-ui.icons.favorite-border :refer [favorite-border]]
            [reagent-material-ui.icons.flare :refer [flare]]
            [reagent-material-ui.icons.local-hospital :refer [local-hospital]]))

(def use-styles
  (make-styles (fn [theme]
                  {:main-text {:font-size "4rem"
                               :font-weight "900"
                               "@media (max-width:1500px)" 
                               {:font-size "2.5rem"}
                               "@media (max-width:600px)" 
                               {:font-size "1.8rem"}}
                   :sub-main-text {:font-size "2.5rem"
                                   :font-weight "500"
                                   "@media (max-width:1500px)" 
                                   {:font-size "1.8rem"}
                                   "@media (max-width:600px)" 
                                   {:font-size "1.5rem"}}
                   :paragraph {:font-size "1.5rem"
                               "@media (max-width:600px)"
                               {:font-size "1.4rem"}}
                   :sm-paragraph {:font-size "1.2rem"
                               "@media (max-width:1500px)" 
                               {:font-size "1.2rem"}}
                   :access-btn {:font-size "1rem"
                                :font-weight "bold"
                                :margin-left "1rem"
                                :color "white"
                                :background "linear-gradient(45deg, #ffa400, #9b6300)"
                                "@media (max-width:600px)"
                                {:font-size "0.8rem"
                                 :margin-left "0.5rem"}
                                }
                   :secondary-access-btn {:font-size "1rem"
                                          :font-weight "bold"
                                          :margin-top "2rem"
                                          :color "white"
                                          :background "linear-gradient(90deg ,#001e62, #000e30)"}
                   :centered-large-text {:font-size "3.8rem"
                                         :margin "3rem"
                                         :text-align "center" 
                                         :font-weight "700"
                                         "@media (max-width:600px)"
                                         {:font-size "2.5rem"}}
                   :title {:font-size "2rem"
                           :margin "1rem"
                           :font-weight "bold"
                            "@media (max-width:600px)"
                            {:font-size "1.4rem"}}
                   :icon {:margin "1rem"}
                   :appbar-btn {:font-weight "900"
                                :font-size "1.2rem"
                                :color "white"}
                   :align-right {:flex-direction "row"
                                 :display "flex"
                                 :justify-content "flex-start"
                                 :align-items "center"}
                   :email-error {:color "#e00146"
                                 :margin-top "0.5rem"
                                 :font-size "0.8rem"}
                   :email-input {:width "50%"
                                 "@media (max-width:600px)"
                                 {:width "100%"}}})))

(defn submit-email-response [email email-sent?] 
  (when (not (clojure.string/blank? @email))
    (if (b/valid? {:email @email} email-validation)
      (do
        (dispatch [:save-email @email])
        (reset! email nil)
        (dispatch [:set-db-item [:invalid? :email] false])
        (reset! email-sent? true))
      (dispatch [:set-db-item [:invalid? :email] true]))))

(defn email-input-and-btn [box-style]
  (with-let [email (atom nil)
             email-sent? (atom false)]
    (let [styles (use-styles)
          invalid-email? (subscribe [:db [:invalid? :email]])]
      [box
       [box box-style
        [text-field {:label "your email address"
                     :placeholder "john@example.com"
                     :variant "filled"
                     :value @email
                     :error @invalid-email?
                     :classes {:root (:email-input styles)}
                     :on-change #(do
                                   (reset! email (-> % .-target .-value))
                                   (when (clojure.string/blank? @email)
                                     (dispatch [:set-db-item [:invalid? :email] false])))}]
        [button
         {:variant "contained"
          :size "large"
          :classes {:root (:access-btn styles)}
          :on-click #(submit-email-response email email-sent?)}
         "Get early access"]]
       (when @invalid-email?
         [box {:display "flex" :flex-direction "flex-start"}
          [typography {:className (:email-error styles)} "Invalid email address"]])
       (when @email-sent?
         [snackbar {:open @email-sent? :anchor-origin {:vertical "top"
                                                       :horizontal "center"}
                    :auto-hide-duration 6000 :on-close #(reset! email-sent? false)}
          [alert {:severity "success"}
           [alert-title "You're on the list!"] "You will be notified when the platform is launched :)"]])])))

(defn early-access-modal []
  (let [styles (use-styles)]
    [dialog {:open @(subscribe [:db [:open? :early-access-modal]])
             :on-enter #(dispatch [:set-db-item [:invalid? :email] false])
             :on-close #(do 
                          (dispatch [:set-db-item [:open? :early-access-modal] false])
                          (dispatch [:set-db-item [:invalid? :email] false]))}
     [box {:p "1rem" :display "flex" :flex-direction "column" :text-align "center"
           :justify-content "center" :align-items "center"}
      [typography {:className (:title styles)} "Submit your email adress to get early access!"]
      [break]
      [email-input-and-btn {:display "flex" :justify-content "center" :align-items "center"}]]]))

(defn main-section []
 (with-let [_ (set-value :email nil)]
   (let [styles (use-styles)]
     [box
      [:div.main-image-bg

       [grid {:container true}

        [grid {:container true
               :item true
               :lg 7
               :xs 7}
         [grid {:item true
                :xs 12}
          [typography {:className (:main-text styles)}
           "The Human First Company"]]
         [grid {:item true
                :xs 12}
          [typography {:className (:sub-main-text styles)}
           "Redefining Men’s Healthcare "]]

         [hidden {:sm-down true}
          [grid {:item true
                 :xs 11}
           [typography {:className (:paragraph styles)} "Offering a seamless online experience focusing on effective treatment plans by our licensed physicians and specialist doctors. "]]
          [grid {:item true
                 :lg 8}
           [break]
           [email-input-and-btn {:className (:align-right styles)}]]
          [grid {:item true
                 :lg 4}]]]

        [grid {:item true
               :lg 5
               :xs 5}]]]

      [hidden {:md-up true}
       [:div {:style
              {:padding "3rem" :display "flex" :flex-direction "column" :background "#eaf1f8"
              :justify-content "center" :align-items "center" :text-align "center"}}
        [typography {:className (:paragraph styles)} "Offering a seamless online experience focusing on effective treatment plans by our licensed physicians and specialist doctors. "]
        [break]
        [email-input-and-btn {:display "flex" :justify-content "center" :align-items "center"}]]]])))

(defn category-details [details]
  (let [styles (use-styles)]
     [box {:width "90%"  :margin-left "auto" :margin-right "auto"}
      [card {:header 
             {:title  [box {:display "flex" :flex-direction "row" :align-items "center"}     
                       (:icon details)
                       [typography {:className (:title styles)} (:title details)]]
              :subheader (for [paragraph (:description details)]
                           ^{:key (gen-uuid)}[typography {:className (:sm-paragraph styles)} paragraph])}}
       [box
        (for [condition (:conditions details)]
          ^{:key (gen-uuid)} [box {:className (:align-right styles)}
               [local-hospital {:classes {:root (:icon styles)}}]
               [typography {:className (:sm-paragraph styles)} condition]])]]
        [box {:display "flex" :justify-content "center"}
         [button
          {:variant "contained"
           :size "large"
           :classes {:root (:secondary-access-btn (use-styles))}
           :on-click #(dispatch [:set-db-item [:open? :early-access-modal] true])}
          "Get early access"]]
      ]))

(defn category-image [image-url]
  [box {:text-align "center"}
   [:img {:src image-url
          :width "90%"}]])

(defn sexual-health []
  (let [styles (use-styles)]
    [category-container
     [category-image "/img/healthy-sexual-life.jpg"]
     [category-details {:title  "Sexual Health"
                        :description ["We care about all aspects of men’s health so we approach it thoroughly. Receive precise, discreet and personalized care along with authentic prescriptions including medication packages addressing your sexual health conditions."]
                        :conditions ["Erectile Dysfunction" "Premature Ejaculation"]
                        :icon [favorite-border {:font-size "large"
                                                :color "secondary"}]}]]))

(defn daily-health []
  (let [styles (use-styles)
        details    [category-details {:title  "Daily Health"
                                      :description [ "The loss of testosterone both due to natural causes or other conditions combined with the lack of vital vitamins and minerals from the body cause symptoms that highly affect our mood and performance." "We offer personalized programs for testosterone support to make you always perform their daily tasks to their full potential."]
                                      :conditions ["Multivitamins and Energy Support" "Testosterone Boost" "Testosterone Replacement Treatment"]
                                      :icon [flare {:font-size "large"
                                                              :color "secondary"}]}]
        image      [category-image "/img/happy-man.jpg"]]

    [box
     [hidden {:sm-down true}
      [category-container details image]]
     [hidden {:md-up true}
      [category-container image details]]]))

(defn skin-and-hair []
  (let [styles (use-styles)]
    [category-container
     [category-image "/img/healthy-skin-hair.jpg"]
     [category-details {:title "Skin & Hair"
                        :description ["Stress and fatigue are taking a toll on the way we look. We take care of all your needs for glowing skin and healthy hair."]
                        :conditions ["Hair Loss" "Skin Revitalization & Anti Fatigue"]
                        :icon [favorite-border {:font-size "large"
                                      :color "secondary"}]}]]))


(defn metabolic-health-and-weight-management []
  (let [styles (use-styles)
        details   [category-details {:title "Metabolic Health & Weight Management"
                                     :description ["Busy lifestyle, bad diet and lack of exercise makes it extremely difficult to manage and optimize the way we look and feel while avoiding the development of further diseases." "We help you understand your metabolism and the way your body works and reacts to different foods optimizing your diet, calories and glucose intake. "]
                                     :conditions ["Glucose Monitoring" "Weight Management Aid"]
                                     :icon [flare {:font-size "large"
                                                   :color "secondary"}]}]  
        image      [category-image "/img/athletic-man.jpg"]]

    [box
     [hidden {:sm-down true}
      [category-container details image]]
     [hidden {:md-up true}
      [category-container image details]]]))

(defn conditions []
  [box
   [typography 
    {:classes {:root (:centered-large-text (use-styles))}}
    "What We Treat"]
   [sexual-health]
   [break]
   [daily-health]
   [break]
   [skin-and-hair]
   [break]
   [metabolic-health-and-weight-management]])


(defn landing-page []
  [box
   [appbar]
   [:br][:br][:br]
   [main-section]
   [app-container [conditions]]
   [footer]
   [early-access-modal]])
