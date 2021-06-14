(ns behumen.core
  (:require
    [day8.re-frame.http-fx]
    [behumen.handlers.events]
    [reagent.dom :as rdom]
    [reagent.core :as r]
    [re-frame.core :as rf :refer [dispatch subscribe dispatch-sync]]
    [reitit.frontend.easy :as rfe]
    [goog.events :as events]
    [goog.history.EventType :as HistoryEventType]
    [behumen.ajax :as ajax]
    [behumen.routes :refer [reitit-routes]]
    [behumen.subscriptions]
    [behumen.views.common :as common-views]
    [behumen.views.home :as landing]
    [rams-ui.components.theme :refer [theme toggle-ltr]]
    [rams-ui.components.nav :refer [set-url-selected]]
    [rams-ui.util :as util :refer [open-url get-history get-url]]
    [reitit.core :as reitit]
    [clojure.string :as string])
  (:import goog.History))

(defn render-page []
  (let [current-page-type (rf/subscribe [:get-current-page-type])]
    (cond
      (= @current-page-type :landing-page) [landing/landing-page])))

(defn render-theme []
  (util/reset-page-render)
  (let [spacing 4]
      [theme {:palette {:common {:black "#000"
                               :white "#fff"}
                        :background {:default "#fff"
                                     :paper "#f6f9fc"}
                        :primary {:light "#0652ff"
                                  :main "#001e62"
                                  :dark "#000e30"
                                  :contrast-text "#fff"}
                        :secondary {:light "#ffd790"
                                    :main "#ffa400"
                                    :dark "#9b6300"
                                    :contrast-text "#fff"}
                        :error {:light "rgba(239, 149, 177, 1)"
                                :main "rgba(224, 1, 70, 1)"
                                :dark "rgba(224, 1, 70, 1)"
                                :contrast-text "#fff"}
                        :text {:primary "rgba(30, 30, 30, 1)"
                               :secondary "rgba(48, 50, 51, 1)"
                               :disabled "rgba(153, 153, 153, 1)"
                               :hint "rgba(168, 168, 168, 1)"}}
              :breakpoints {:values { :xs 0
                                      :sm 600
                                      :md 1200
                                      :lg 1500}}
              :typography {:font-family "\"Montserrat\", \"sans-serif\""}
              :props {:MuiTypography {:variantMapping {:maccy "h1"}
                                      }}
              :spacing spacing
              :css {".header_1" {:font-size "20px" :font-weight 800
                                 :color "green"}}
              :overrides {:MuiOutlinedInput {:notchedOutline
                                             {"@global" {:legend {:display "none"}}
                                            :top 0}
                                             :input {:padding  (* 3.5 spacing)}}
                        :MuiInputLabel {:outlined {:position "inherit"
                                                   :transform "none !important"
                                                   :margin-bottom (* 1.5 spacing)}}}}
   [render-page]]))

;; -------------------------
;; Initialize app
(def functional-compiler (r/create-compiler {:function-components true}))

(defn ^:dev/after-load mount-components []
  (rf/clear-subscription-cache!)
  (r/set-default-compiler! functional-compiler)
  (rdom/render [#'render-theme] (.getElementById js/document "app-body") functional-compiler))

(defn init! []
  (rf/dispatch-sync [:initialize-db])  
  (rfe/start! reitit-routes
              #(let [route (:data %)]
                 (if (contains? route :type)
                   (dispatch [:set-current-page-type (:type route)])
                   (do
                     (dispatch [:set-current-page-type nil])
                     (set-url-selected :main-nav (:path route))
                     (open-url (:path route) :params (:query-params %)
                               :label (:label route)))))
                 {:use-fragment false})
  
  (ajax/load-interceptors!)
  (mount-components))
