(ns behumen.db.core
  (:require
    [next.jdbc.date-time]
    [next.jdbc.result-set]
    [clojure.tools.logging :as log]
    [conman.core :as conman]
    [behumen.config :refer [env]]
    [mount.core :refer [defstate]]))

(defstate ^:dynamic *db*
  :start (if-let [jdbc-url (env :database-url)]
           (conman/connect! {:jdbc-url jdbc-url})
           (do
             (log/warn "database connection URL was not found, please set :database-url in your config, e.g: dev-config.edn")
             *db*))
  :stop (conman/disconnect! *db*))


(defn bind-sql-files []
  (let [directory (clojure.java.io/file "./resources/sql")
        sql-files (file-seq directory)]
    (doall (for [file sql-files
                 :when (not (.isDirectory file))]
             (conman/bind-connection *db* (str "sql/" (.getName file)))))))

(bind-sql-files)

