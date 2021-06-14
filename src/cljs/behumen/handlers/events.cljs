(ns behumen.handlers.events
  (:require
    [re-frame.core :as rf :refer [dispatch dispatch-sync
                                  reg-event-db subscribe]]
    [rams-ui.util :refer [get-db-value set-db-value]]
    [behumen.common :as common]
    [behumen.utils :refer [save-local-item get-local-item remove-local-item]]
    [behumen.routes :refer [get-route-by-name]]
    [behumen.ajax :refer [ajax]]))

(reg-event-db
 :set-current-page-type
 (fn [db [_ type]]
   (if (nil? type)
     (dissoc db :current-page-type)
     (assoc db :current-page-type type))))


(reg-event-db
  :initialize-db
  (fn [_ _]
    {:current-page-type :login 
     :user {}
     :temp-data {}
     :open? {:early-access-modal false}}))

(reg-event-db
 :set-db-item
 (fn [db [_ original-db-key value]]
   (let [db-key (if (vector? original-db-key)
                  original-db-key
                  [original-db-key])]
     ;(dispatch [:clear-and-set-locking-mechanisim])
     (assoc-in db db-key value))))

(reg-event-db
 :save-email
 (fn [db [event-key email]]
   (ajax :db db :event event-key
         :url (common/generate-url :save-email) :method :post
         :params {:email email}
         :on-success #(js/console.log "response: " %)
         :in-failure #(js/console.log "failure: " %))))
