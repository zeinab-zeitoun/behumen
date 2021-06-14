(ns behumen.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [behumen.core-test]))

(doo-tests 'behumen.core-test)

