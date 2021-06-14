(ns behumen.ajax
  (:require
    [luminus-transit.time :as time]
    [cognitect.transit :as transit]
    [behumen.common :as common]
    [ajax.core :as cajax]
    [rams-ui.components.alert :refer [show-alert hide-alert]]
    [rams-ui.ajax :refer [make-call set-config]]
    [clojure.string :as cstr]
    [re-frame.core :as rf :refer [dispatch reg-event-db subscribe]]))

(defn local-uri? [{:keys [uri]}]
  (not (re-find #"^\w+?://" uri)))

(defn default-headers [request]
  (if (local-uri? request)
    (-> request
        (update :headers #(merge {"x-csrf-token" js/csrfToken} %)))
    request))

;; injects transit serialization config into request options
(defn as-transit [opts]
  (merge {:raw             false
          :format          :transit
          :response-format :transit
          :reader          (transit/reader :json time/time-deserialization-handlers)
          :writer          (transit/writer :json time/time-serialization-handlers)}
         opts))

(defn load-interceptors! []
  (swap! cajax/default-interceptors
         conj
         (cajax/to-interceptor {:name "default headers"
                               :request default-headers})))


(set-config :success common/+success+)
(set-config :error common/+error+)
(set-config :warning common/+warning+)

(defn ajax [& {:keys [db url event method params
                      on-success on-error hide-loader?
                      allow-repeat? finally
                      on-warning]
               :or {method :get allow-repeat? false
                    no-loader? true}}]
  (let [user (:user db)]
    (make-call :url url :call-key event :method method
                    :params (if (:token user)
                                (assoc params :jstoken (:token user))
                                params)
                    :show-loader? (not hide-loader?)
                    :on-success-fn on-success
                    :on-error-fn on-error
                    :on-warning-fn on-warning
                    :on-finally-fn finally
                    :handle-message-fn #(show-alert
                                         {:type (:status %) :show-close? true}
                                         (:message %))
                    :required-message-fn (fn [result]
                                           (show-alert
                                            {:type (:status result) :show-close? true}
                                            (str (clojure.string/join
                                                  "" (drop-last
                                                      (drop-last
                                                       (reduce str
                                                               (map
                                                                #(.replace
                                                                  % " must be present" ", ")
                                                                (for [[_ issue] (:issues result)]
                                                                  (first issue)))))))
                                                 " field(s) must be present")))
                    :no-repeat-response-fn (when allow-repeat?
                                             (fn []
                                               (show-alert
                                                {:type "warning" :show-close? true}
                                                "Already processing this request, give us a moment"))))
  db))
