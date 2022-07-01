v2.1.1 / 2022-07-01
==================

* Resolve missing addon warning #49 from @bertdeblock

v2.1.0 / 2022-06-28
==================

Note: this is really just a bugfix but I am releasing it as a minor version since it has a significant change in how the functionality is achived 👍

* Use `require` to retrieve the app's config #45 from @Windvis
* Fix ember-try issues  #46 from @mansona
* Fix fastboot double wrapping default export/import #44 from @mansona

v2.0.0 / 2022-04-22
==================

* breaking: re-export configModule to reduce duplication and fix dynamic config #41 from @mansona

This is only breaking because if you were relying on dynamic config changes (by altering the config HTML) then before this PR it wasn't working, and now because of this PR it is working 🎉

v1.0.4 / 2022-04-06
==================

* add type declaration file #38 from @mansona

v1.0.3 / 2022-04-06
==================

* make sure that config is from the test environment when running /tests #35 from @mansona

v1.0.2 / 2022-01-21
==================

* Allow @embroider/macros v1.0.0 as dependency #32 from @navels

v1.0.1 / 2022-01-17
==================

* Move `ember-cli-htmlbars` to devDependencies #33 from @SergeAstapov

v1.0.0 / 2022-01-11
==================

* Add Embroider support #29 from @mansona
* Update Build Status badge: Travis -&gt; GH Actions #31 from @SergeAstapov

v0.5.0 / 2021-10-27
==================

* Update repository url in package.json #30 from @SergeAstapov
* Update Ember #28 from @mansona
* breaking: drop support for Ember &lt; 3.4 #27 from @mansona

v0.4.0 / 2021-10-17
==================

* Update Ember #26 from @mansona
* Add changelog and a script to easily generate it #24 from @mansona
* move to github actions #25 from @mansona

v0.3.0 / 2021-09-16
==================

* upgrade ember-cli-babel to v7 #20 from @nlfurniss

v0.2.3 / 2017-09-04
==================

* Remove `included` deprecation warning #15 from @dfreeman

v0.2.2 / 2017-06-02
==================

v0.2.1 / 2017-02-02
==================

v0.2.0 / 2016-12-29
==================

* Don't overcount inclusions #12 from @dfreeman
* Don't mutate our own source code #13 from @dfreeman

v0.1.11 / 2016-10-05
==================

v0.1.10 / 2016-10-05
==================

v0.1.9 / 2016-09-25
==================

v0.1.8 / 2016-09-24
==================

v0.1.7 / 2016-08-14
==================

v0.1.6 / 2016-08-14
==================

v0.1.5 / 2016-08-14
==================

v0.1.4 / 2016-08-11
==================

v0.1.3 / 2016-08-01
==================

v0.1.2 / 2016-08-01
==================

v0.1.1 / 2016-08-01
==================

v0.1.0 / 2016-07-29
==================

v0.0.4 / 2016-06-05
==================

* Create regex only once #3 from @nickiaconis
* Break early after finding config module name #4 from @nickiaconis
* Cleanup repository #2 from @nickiaconis
* Increase specificity of module name regex #5 from @nickiaconis

v0.0.3 / 2016-04-27
==================

v0.0.2 / 2015-11-05
==================

v0.0.1 / 2015-11-05
==================
