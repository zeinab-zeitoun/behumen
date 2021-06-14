(defproject behumen "0.1.0-SNAPSHOT"

  :description "FIXME: write description"
  :url "http://example.com/FIXME"

  :dependencies [[bouncer "1.0.1"]
                 [bouncer "1.0.1"]
                 [buddy/buddy-auth "2.2.0"]
                 [buddy/buddy-core "1.8.0"]
                 [buddy/buddy-hashers "1.6.0"]
                 [buddy/buddy-sign "3.2.0"]
                 [ch.qos.logback/logback-classic "1.2.3"]
                 [cheshire "5.9.0"]
                 [clj-time "0.15.2"]
                 [cljs-ajax "0.8.1"]
                 [clojure.java-time "0.3.2"]
                 [clojurewerkz/quartzite "2.1.0"]
                 [com.cognitect/transit-clj "1.0.324"]
                 [com.fasterxml.jackson.core/jackson-core "2.11.3"]
                 [com.google.protobuf/protobuf-java "3.8.0"]
                 [conman "0.9.0"]
                 [cprop "0.1.15"]
                 [day8.re-frame/http-fx "0.2.1"]
                 [expound "0.8.3"]
                 [funcool/struct "1.4.0"]
                 [luminus-http-kit "0.1.9"]
                 [luminus-migrations "0.6.9"]
                 [luminus-transit "0.1.2"]
                 [luminus/ring-ttl-session "0.3.3"]
                 [metosin/jsonista "0.2.7"]
                 [metosin/muuntaja "0.6.6"]
                 [metosin/reitit "0.5.9"]
                 [metosin/ring-http-response "0.9.1"]
                 [mount "0.1.16"]
                 [mysql/mysql-connector-java "8.0.18"]
                 [nrepl "0.6.0"]
                 [org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.773" :scope "provided"]
                 [org.clojure/core.async "0.6.532"]
                 [org.clojure/tools.cli "0.4.2"]
                 [org.clojure/tools.logging "0.5.0"]
                 [org.webjars.npm/bulma "0.8.0"]
                 [org.webjars.npm/material-icons "0.3.1"]
                 [org.webjars/webjars-locator "0.38"]
                 [rams4js/rams-ui "0.1.0"]
                 [rams4web/web-middleware "0.1.2-SNAPSHOT"]
                 [re-frame "1.1.1"]
                 [reagent "1.0.0-alpha2"]
                 [reagent-utils "0.3.3"]
                 [ring-webjars "0.2.0"]
                 [ring/ring-core "1.8.0"]
                 [ring/ring-defaults "0.3.2"]
                 [selmer "1.12.18"]
                 [thheller/shadow-cljs "2.12.5" :scope "provided"]]

  :npm-deps [[shadow-cljs "2.10.17" :scope "provided"]]

  :min-lein-version "2.0.0"
  
  :source-paths ["src/clj" "src/cljc" "src/cljs" "src/cljc"]
  :test-paths ["test/clj"]
  :resource-paths ["resources" "target/cljsbuild"]
  :target-path "target/%s/"
  :main ^:skip-aot behumen.core

  :plugins [[lein-shadow "0.4.0"]] 
  :clean-targets ^{:protect false}
  [:target-path [:cljsbuild :builds :app :compiler :output-dir] [:cljsbuild :builds :app :compiler :output-to]]
  :shadow-cljs
  {:nrepl {:port 7002}
   :builds
   {:app
    {:target :browser
     :output-dir "target/cljsbuild/public/js"
     :asset-path "/js"
     :compiler-options {:output-feature-set :es6}
     :module-loader true
     :modules {:app
               {:entries [behumen.app]}}
     :devtools {:watch-dir "resources/public"}}
    :test
    {:target :node-test
     :output-to "target/test/test.js"
     :autorun true}}}
  

  :repositories  [["snapshots" "https://www.rams.services/repos/nexus/content/repositories/snapshots"]
                  ["releases" "https://www.rams.services/repos/nexus/content/repositories/releases"]]

  :profiles
  {:uberjar {:omit-source true
             :prep-tasks ["compile" ["shadow" "once" "min"]]
             :aot :all
             :uberjar-name "behumen.jar"
             :source-paths ["env/prod/clj"]
             :Resource ["env/prod/resources"]} 

   :dev           [:project/dev :profiles/dev]
   :test          [:project/dev :project/test :profiles/test]

   :project/dev  {:jvm-opts ["-Dconf=dev-config.edn" ]
                  :dependencies [[binaryage/devtools "1.0.2"]
                                 [cider/piggieback "0.5.1"]
                                 [pjstadig/humane-test-output "0.10.0"]
                                 [prone "2019-07-08"]
                                 [re-frisk "1.3.4"]
                                 [ring/ring-devel "1.8.0"]
                                 [ring/ring-mock "0.4.0"]]
                  :preloads [re-frisk.preload]
                  :plugins      [[com.jakemccrary/lein-test-refresh "0.24.1"]
                                 [jonase/eastwood "0.3.5"]] 
                
                  :source-paths ["env/dev/clj" "env/dev/cljs"]
                  :resource-paths ["env/dev/resources"]
                  :repl-options {:init-ns user
                                 :timeout 120000}
                  :injections [(require 'pjstadig.humane-test-output)
                               (pjstadig.humane-test-output/activate!)]}
   :project/test {:jvm-opts ["-Dconf=test-config.edn" ]
                  :resource-paths ["env/test/resources"] 
                  :cljsbuild 
                  {:builds
                   {:test
                    {:source-paths ["src/cljc" "src/cljs" "test/cljs"]
                     :compiler
                     {:output-to "target/test.js"
                      :main "behumen.doo-runner"
                      :optimizations :whitespace
                      :pretty-print true}}}}

                  }
   :profiles/dev {}
   :profiles/test {}})
