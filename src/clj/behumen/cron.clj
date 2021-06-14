(ns behumen.cron
  (:require [clojurewerkz.quartzite.scheduler :as qschedule]
            [clojurewerkz.quartzite.triggers :as qtrigger]
            [clojurewerkz.quartzite.jobs :as qjob :refer [defjob]]
            [clojurewerkz.quartzite.schedule.cron :as qcron]
            [clojurewerkz.quartzite.schedule.calendar-interval :as qinterval]
            [clojure.tools.logging :as log]
            [clojure.core.async :refer [thread-call]]
            [behumen.config :refer [env]]))

(defn sample-job-1 [ctx]
  (try
    nil
    (catch Exception e
      (log/error "[CRON JOB EXCEPTION] " (.getMessage e)))))

(defjob hour-job [ctx]
  (thread-call (fn [] (sample-job-1 ctx)))
  true)

(defjob midnight-job [ctx]
  (thread-call (fn [] (sample-job-1 ctx)))
  true)

(defjob midday-job [ctx]
  (thread-call (fn [] (sample-job-1 ctx)))
  true)

(defjob minute-job [ctx]
  (thread-call (fn [] (sample-job-1 ctx)))
  true)

(defn run-minute-jobs [scheduler]
  (let [minute-job-1 (qjob/build
                      (qjob/of-type minute-job)
                      (qjob/with-identity (qjob/key "jobs.minute")))
        minute-trigger-1 (qtrigger/build
                          (qtrigger/with-identity (qtrigger/key "triggers.minute.1"))
                          (qtrigger/start-now)
                          (qtrigger/with-schedule (qinterval/schedule
                                                   (qinterval/with-interval-in-minutes 1))))]
    (qschedule/schedule scheduler minute-job-1  minute-trigger-1)))

(defn run-hourly-jobs [scheduler]
  (let [hourly-job-1 (qjob/build
                      (qjob/of-type hour-job)
                      (qjob/with-identity (qjob/key "jobs.hourly")))
        hourly-trigger-1 (qtrigger/build
                         (qtrigger/with-identity (qtrigger/key "triggers.hourly.1"))
                         (qtrigger/start-now)
                         (qtrigger/with-schedule (qinterval/schedule
                                                  (qinterval/with-interval-in-minutes 60))))]
    (qschedule/schedule scheduler hourly-job-1  hourly-trigger-1)))


(defn run-daily-jobs [scheduler]
  (let [midnight-job (qjob/build
                      (qjob/of-type midnight-job)
                      (qjob/with-identity (qjob/key "jobs.midnight")))
        midday-job (qjob/build
                    (qjob/of-type midday-job)
                    (qjob/with-identity (qjob/key "jobs.midday")))
        midday-trigger-1 (qtrigger/build
                            (qtrigger/with-identity (qtrigger/key "triggers.midday.1"))
                            (qtrigger/start-now)
                            (qtrigger/with-schedule (qcron/schedule
                                                     (qcron/daily-at-hour-and-minute 12 8))))
        midnight-trigger-1 (qtrigger/build
                            (qtrigger/with-identity (qtrigger/key "triggers.midnight.1"))
                            (qtrigger/start-now)
                            (qtrigger/with-schedule (qcron/schedule
                                                     (qcron/daily-at-hour-and-minute 0 8))))]
    (qschedule/schedule scheduler midnight-job midnight-trigger-1)
    (qschedule/schedule scheduler midday-job midday-trigger-1)))


(let [scheduler (atom nil)]
  
  (defn kill-running-cron-jobs []
    (doseq [key ["triggers.midnight.1"
                 "triggers.midday.1" 
                 "triggers.hourly.1"
                 "triggers.minute.1"]]
      (qschedule/delete-trigger @scheduler (qtrigger/key key))))

  (defn get-scheduler []
    @scheduler)
  
  (defn setup-running-cron-jobs []
    (reset! scheduler  (-> (qschedule/initialize)
                           qschedule/start))
    (run-minute-jobs @scheduler)
    (run-hourly-jobs @scheduler)
    (run-daily-jobs @scheduler)))
