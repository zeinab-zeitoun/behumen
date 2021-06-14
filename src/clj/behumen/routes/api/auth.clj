(ns behumen.routes.api.auth
  (:require [clojure.tools.logging :as log]
            [behumen.routes.def :as rdef]
            [behumen.config :refer [env]]
            [web-middleware.core :refer [rfn set-lib-params] :as middle ]
            [web-middleware.time :as time]
            [web-middleware.helpers :as helpers]
            [behumen.common :as common]
            [behumen.translation :refer [tr]]
            [bouncer.core :as b]
            [buddy.sign.jwt :as jwt]
            [behumen.validation :refer [email-validation]]
            [behumen.db.core :as db]
            [clojure.spec.alpha :as s]
            [buddy.hashers :as hashers]
            [ring.util.response :refer [response]]))

(rfn save-email [info]
     {:fields {:email string?}
      :url :save-email
      :method :post}
     (if (b/valid? {:email (:email info)} email-validation)
       (if (nil? (db/get-email {:email (:email info)}))
         (do
           (db/create-email! {:email (:email info)})
           {:status common/+success+ :message (tr "email successfully added!")})
         {:status common/+success+ :message (tr "email is already added")})
       {:status common/+error+ :message (tr "invalid email address")}))
