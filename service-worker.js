/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/developer-docs/2014/03/22/vuejs-010-release/index.html","e2c319d75386a8eda7f355ad0b7d704f"],["/developer-docs/2014/07/29/vue-next/index.html","57b713e8b80cd65fdfa901e5653e2041"],["/developer-docs/2014/11/09/vue-011-release/index.html","458e330d94eb670957bfdf79a994501b"],["/developer-docs/2014/12/08/011-component/index.html","335d901194c80d4d6c94ea6bd52b1454"],["/developer-docs/2015/06/11/012-release/index.html","236b2f17ed5bb3f4bb4a204bd7440774"],["/developer-docs/2015/10/26/1.0.0-release/index.html","643571231478235b279262bba5b83e67"],["/developer-docs/2015/10/28/why-no-template-url/index.html","35294e2ad380b04e738cb53c6ed18b08"],["/developer-docs/2015/12/28/vue-cli/index.html","072fac7354afa4235e23cc027b7aac1d"],["/developer-docs/2016/02/06/common-gotchas/index.html","229a1302edcbd500e387fc436fa37580"],["/developer-docs/2016/03/14/march-update/index.html","81a5fa044b79da47ea15e533f96a289d"],["/developer-docs/2016/04/27/announcing-2.0/index.html","901e580bc31ce40d220e0d72638f5749"],["/developer-docs/api/index.html","eda9eb97f73a83d0ba747a35a950d1c6"],["/developer-docs/archives/2014/03/index.html","9b6a029abe6f92b010e66ea7f53d7c8a"],["/developer-docs/archives/2014/07/index.html","ccd8243a9d793a0e971a8cc4a9d56887"],["/developer-docs/archives/2014/11/index.html","7fa5ca57005a4cc2818333b16badef02"],["/developer-docs/archives/2014/12/index.html","04e2366b4c5ae9512b5ee1cbde793105"],["/developer-docs/archives/2014/index.html","de68507a87687baa8b1e40958018af7a"],["/developer-docs/archives/2015/06/index.html","dc51c18a0682f47eaad1ed5d8c810a65"],["/developer-docs/archives/2015/10/index.html","795ab388209708370724524bfcab6b4f"],["/developer-docs/archives/2015/12/index.html","cd0068d84f7a6a5bc2a4586cb8260521"],["/developer-docs/archives/2015/index.html","46048bc750dbb0bcdb42d944ce553878"],["/developer-docs/archives/2016/02/index.html","d90b37048d8c2ba09fa77f69da84d6eb"],["/developer-docs/archives/2016/03/index.html","0ce63c3f1936eca4b8ff06554e3ca90a"],["/developer-docs/archives/2016/04/index.html","62a55452fb748c58a3206fe444126e37"],["/developer-docs/archives/2016/index.html","ecbaa908cde5a7f8996d499b6a66af50"],["/developer-docs/archives/index.html","ec7415f16bab84e6c7494d9c6f9954e2"],["/developer-docs/archives/page/2/index.html","329f44b775168c6af8df9d404e8965b2"],["/developer-docs/atom.xml","0109bf1a62272d2ed3a28c3946ad3329"],["/developer-docs/browserconfig.xml","a9461fcba28550a616a19a0aee8450ac"],["/developer-docs/coc/index.html","fdacbcabd9889453e2fffbb2fb7932f9"],["/developer-docs/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/developer-docs/css/index.css","09902aa2ce821a579fa88d38c4098f5c"],["/developer-docs/css/page.css","556d5e37d502cbd16845eb34ded19781"],["/developer-docs/css/search.css","bda2fbd2bf24491e3740b1db37850360"],["/developer-docs/examples/commits.html","b7754b83ab12687847c8d3ecf39f7d56"],["/developer-docs/examples/elastic-header.html","06a895fb28342ceba4e358baf0f8221e"],["/developer-docs/examples/firebase.html","d6f78f2024be05d6b7311ee503c3c353"],["/developer-docs/examples/grid-component.html","df2b9c44c1194ca4bffa2cc9f77a54c8"],["/developer-docs/examples/hackernews.html","f73af71cf8ec914470dcc04658f05d80"],["/developer-docs/examples/index.html","00d2d262da29b02a9f5343ea9b75d020"],["/developer-docs/examples/modal.html","965b72b9421c46256d39f296629f96c3"],["/developer-docs/examples/select2.html","73cb6b3cfb9f56248a5bd73e621fa7f6"],["/developer-docs/examples/svg.html","1406ecebdcba7ec43a029e30c7400a47"],["/developer-docs/examples/todomvc.html","cf43b3c57166a01fc4bb34a48c59a1b1"],["/developer-docs/examples/tree-view.html","f51da69d2064e9a789aa09cdf793f6fd"],["/developer-docs/guide/class-and-style.html","81dae80c1a8742c579f1647074e0fb48"],["/developer-docs/guide/comparison.html","81657e78f72bdc90dd4f01e0676af8c2"],["/developer-docs/guide/components.html","5010167a1fc10d92bf38035836f838e2"],["/developer-docs/guide/computed.html","e2c679d9c5e7dc43700eb984d0a0f6a1"],["/developer-docs/guide/conditional.html","7ff03f37a4cd8b6c4deb5b8cc4b541c4"],["/developer-docs/guide/custom-directive.html","87c533278cde17c15038d0f1f37b020b"],["/developer-docs/guide/deployment.html","aa60a55fd16120c5ff3740482ea00860"],["/developer-docs/guide/events.html","274fc7bc7f45f2693670866365daaef2"],["/developer-docs/guide/forms.html","0a752e56e540e214aec7a4425e940819"],["/developer-docs/guide/index.html","f3fe81467a0e61d69d73b565ac9606d3"],["/developer-docs/guide/installation.html","4eff429d2d93e0994aadba8eddcaf83a"],["/developer-docs/guide/instance.html","3e5a31fdb9fcb2d12d92695cc495f768"],["/developer-docs/guide/join.html","5b58963291fc77c3371618e6227e5752"],["/developer-docs/guide/list.html","a6df29a1f012d4d7634bc030cbb00469"],["/developer-docs/guide/migration-vue-router.html","b791a6460bb786c5fc44c98d31e87ade"],["/developer-docs/guide/migration-vuex.html","c8c73f72a9a8ac4743e71638af9644fc"],["/developer-docs/guide/migration.html","0e1f9c8fa728a8e66451ae6b98f26d09"],["/developer-docs/guide/mixins.html","b1b5eead7c2c539c6888bd39a1ba9418"],["/developer-docs/guide/plugins.html","e76fab563e12d7f8088cd36e2ce313ba"],["/developer-docs/guide/reactivity.html","7e1bea7f91a21adf3e578092b273f59c"],["/developer-docs/guide/render-function.html","1daa8693fab9c625805418500675a93f"],["/developer-docs/guide/routing.html","66199fd2ebfbbef702d798fecae895d8"],["/developer-docs/guide/single-file-components.html","403a5f3b6586662cd811ea03c76a4f65"],["/developer-docs/guide/ssr.html","a8851abc676b105f9e25fc96b9b94def"],["/developer-docs/guide/state-management.html","8cdf4b540f48bd5f68a32a7caaa83c31"],["/developer-docs/guide/syntax.html","eb65cb7589062e784079535cdb1a013a"],["/developer-docs/guide/transitioning-state.html","cf19b471f5ee62ff066cc4877477e557"],["/developer-docs/guide/transitions.html","5eb5d376e349c55069e839b091b9e049"],["/developer-docs/guide/unit-testing.html","bfb1dae862e535491d93e5f42a6df9da"],["/developer-docs/images/aaha.png","77bfeb59f772f37444c9cefe00785cf2"],["/developer-docs/images/accelebrate.png","e030e08131cebe8b43c89df18d710ded"],["/developer-docs/images/alligator_io.svg","1ffe0191e22a65337f9cb224790f5222"],["/developer-docs/images/bacancy_technology.png","9a0590eb4ce29289b454240415611162"],["/developer-docs/images/bestvpn_co.png","afbe252b6b59bc3cdac2e7dec69eac39"],["/developer-docs/images/bit.png","9638a3f44bf471876effb80ea0659f73"],["/developer-docs/images/blokt_cryptocurrency_news.png","1517a40ef0fafa2968313c2febef3ad3"],["/developer-docs/images/breakpoint_hit.png","114924925a4ec0f23236012bc3dc8422"],["/developer-docs/images/breakpoint_set.png","6439856732303cfeb3806d52dd681191"],["/developer-docs/images/chaitin.png","549e43997790dc624c477424acbfe228"],["/developer-docs/images/check.png","c634675b753a1a03b587c43d8b535600"],["/developer-docs/images/cloudstudio.png","fc480cf4c2b06591f58e7e91666226af"],["/developer-docs/images/coding.png","10c55345da3c2374563b096f5c86d781"],["/developer-docs/images/coin-bch.png","ddfab54149483e02f3cd540a47e2782b"],["/developer-docs/images/coin-btc.png","d90559bb202766dd6ddabf71dd1680be"],["/developer-docs/images/coin-eth.png","70ae70292937880fe9e77c2c7dc38f86"],["/developer-docs/images/coin-ltc.png","9e756bd611ac7355515153cecbc20d36"],["/developer-docs/images/components.png","b5c08269dfc26ae6d7db3801e9efd296"],["/developer-docs/images/config_add.png","353cd8b2a1bdf9fc4c74a80c5f38090a"],["/developer-docs/images/daily.png","c9a8b2a897dba41c7d5aa6f9cd876d82"],["/developer-docs/images/data.png","5de7af21d4c2de951720c006f84b98fc"],["/developer-docs/images/dcloud.gif","ade7c64e66506b6cff10292efea16ee8"],["/developer-docs/images/derek_pollard.png","b1c4d535b619865d80d6cf1b2e370300"],["/developer-docs/images/devexpress.png","a6d9c786a373088c8d238ca643293c17"],["/developer-docs/images/devsquad.png","e639ea4fd0d7053fc0928d4ff9fefb2a"],["/developer-docs/images/devtools-storage-chrome.png","ac1f3b275b87e2fec9c4df951347be81"],["/developer-docs/images/devtools-storage-edge.png","3e92a3bea017b8398e71db0a2419a191"],["/developer-docs/images/devtools-storage.png","e742c3b1d526bee7be77c050f4bffc92"],["/developer-docs/images/devtools-timetravel.gif","fca84f3fb8a8d10274eb2fc7ed9b65f9"],["/developer-docs/images/dom-tree.png","f70b86bfbbfe1962dc5d6125105f1122"],["/developer-docs/images/dopamine.png","17222090b66cfca59f1ccf8b9843f595"],["/developer-docs/images/down.png","2f948222df409af3121254d5fe0ed377"],["/developer-docs/images/earthlink.png","88f1bd15252b11484834176965844e22"],["/developer-docs/images/energy_comparison.png","1f3f2809057b867842c99679e2723b3e"],["/developer-docs/images/fastcoding_inc.svg","ff35e14cb519fe5d76e6e8d9444e4fa6"],["/developer-docs/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/developer-docs/images/firestick_tricks.png","1ee05223a5b12fe910cb8428d57223d8"],["/developer-docs/images/frontend_love.png","b514babc53a0f3ddc854b0b14a54a489"],["/developer-docs/images/frontendlove.png","b514babc53a0f3ddc854b0b14a54a489"],["/developer-docs/images/gitee.png","429b3c31a180461c4fb66e5ac20e1385"],["/developer-docs/images/gridsome.png","e82a2f872ec319bbb5d0a804288cd9b7"],["/developer-docs/images/hn-architecture.png","b42f49a4e265649f870685b171e4b170"],["/developer-docs/images/hn.png","99176cdebac521e823be519aef514bb3"],["/developer-docs/images/html_burger.png","c7ce1344d001e7a236a89694ed59d988"],["/developer-docs/images/icons.png","ad6ee8c400066e15712cdef4342023da"],["/developer-docs/images/icons/android-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/developer-docs/images/icons/android-icon-192x192.png","5d10eaab941eb596ee59ffc53652d035"],["/developer-docs/images/icons/android-icon-36x36.png","bb757d234def1a6b53d793dbf4879578"],["/developer-docs/images/icons/android-icon-48x48.png","0d33c4fc51e2bb020bf8dd7cd05db875"],["/developer-docs/images/icons/android-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/developer-docs/images/icons/android-icon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/developer-docs/images/icons/apple-icon-114x114.png","f4fd30f3a26b932843b8c5cef9f2186e"],["/developer-docs/images/icons/apple-icon-120x120.png","b6a574d63d52ef9c89189b67bcac5cbd"],["/developer-docs/images/icons/apple-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/developer-docs/images/icons/apple-icon-152x152.png","f53787bf41febf2b044931a305ccaf2a"],["/developer-docs/images/icons/apple-icon-180x180.png","9f6b1e3b92b2c5bd5b7d79501bb6e612"],["/developer-docs/images/icons/apple-icon-57x57.png","83f622ba0994866abc56ace068b6551c"],["/developer-docs/images/icons/apple-icon-60x60.png","643f761bc39f86c70f17cd1fed3b8e08"],["/developer-docs/images/icons/apple-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/developer-docs/images/icons/apple-icon-76x76.png","94d9af047b86d99657b5efb88a0d1c7b"],["/developer-docs/images/icons/apple-icon-precomposed.png","707758f591323153a4f1cb3a8d9641fa"],["/developer-docs/images/icons/apple-icon.png","707758f591323153a4f1cb3a8d9641fa"],["/developer-docs/images/icons/bacancy_technology.png","5810bb8253b1e35ba437373ff83f82d3"],["/developer-docs/images/icons/favicon-16x16.png","a5a9da66870189b0539223c38c8a7749"],["/developer-docs/images/icons/favicon-192x192.png","b362e9cd643c06176b3841b4f099c3c6"],["/developer-docs/images/icons/favicon-32x32.png","3d60db0d77303b2414ddd50cf2472bf7"],["/developer-docs/images/icons/favicon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/developer-docs/images/icons/ms-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/developer-docs/images/icons/ms-icon-150x150.png","e8cdf492981122a2548bc247c7b4067d"],["/developer-docs/images/icons/ms-icon-310x310.png","1721f8303ec2349002b5980a01f27cef"],["/developer-docs/images/icons/ms-icon-70x70.png","a110cf0132b00b23a8605ca72a8874ba"],["/developer-docs/images/icons_8.png","ffcdd01817ecdb32b92bd2f1e4d75e84"],["/developer-docs/images/inkoop.png","1cff77d2c927657d3aceeba2c12db892"],["/developer-docs/images/intygrate.png","fdd390b44a4aeed763f53f4e8f6529e4"],["/developer-docs/images/isle_of_code.png","42f662ab71b943889f8f8b56515350f2"],["/developer-docs/images/jqwidgets_.png","b6a0a55c85816adb196e1f7450a7f3d7"],["/developer-docs/images/jqwidgets_ltd.png","6d209e39ca89483f3677ae859edca4d7"],["/developer-docs/images/laravel.png","9a2fba3eca41e26743dc731e3a4469b6"],["/developer-docs/images/lifecycle.png","6f2c97f045ba988851b02056c01c8d62"],["/developer-docs/images/logged-proxied-data.png","716e3c41aacf453cfaedd61c2795f0ec"],["/developer-docs/images/logo.png","b362e9cd643c06176b3841b4f099c3c6"],["/developer-docs/images/marcus_hiles.png","8b55f40abd154200ce72b8cdb6a8d90f"],["/developer-docs/images/memory-leak-example.png","c2fae8bd6d8fa50632f9cde80be8b3f6"],["/developer-docs/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/developer-docs/images/modus.png","6498c04fee5b8542449b350e77180379"],["/developer-docs/images/mvvm.png","4fbd3c1bc80d47038f3e66cf1478a1a3"],["/developer-docs/images/nativescript.png","05c94493b428db55bb441faaca4b02d8"],["/developer-docs/images/neds.png","1f1a2a46c2575019ae07a90205f60b65"],["/developer-docs/images/onsen_ui.png","e41569bcb10fbca3f361d818b29ed7fd"],["/developer-docs/images/opteo.png","e80eaa359d4722af5fd8fed79fb9eec5"],["/developer-docs/images/passionate_people.png","03e59e28347e1dcd165e4e1525afb545"],["/developer-docs/images/patreon.png","99eb0cdcab5f46697e07bec273607903"],["/developer-docs/images/paypal.png","067bd556ce9e4c76538a8057adb6d596"],["/developer-docs/images/props-events.png","8996ef20503fbf264a0bfdeafccca74a"],["/developer-docs/images/search-by-algolia.png","3f22d84b817bb896bd5bef0705ff8fc7"],["/developer-docs/images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["/developer-docs/images/shopware_ag.png","e2ded483c0660bd629938e37f388d9fb"],["/developer-docs/images/shopware_ag.svg","5d2a8176b6e1b0a348339746de3edf28"],["/developer-docs/images/special-sponsor-spot.png","860ea231e9bd1b3ff35e627eb83bb936"],["/developer-docs/images/state.png","6a05b01942c7d2cff4ea0033ded59ebb"],["/developer-docs/images/stdlib.png","8693858c969505b29339bf84c0a5cbdf"],["/developer-docs/images/storekit.png","cacf47116e5efe9fc2dcd60ebc197707"],["/developer-docs/images/syncfusion.png","fd1617455479c2e3265656c167faeb91"],["/developer-docs/images/tee__.png","ea5fd763d459d3942e50c323fa32988a"],["/developer-docs/images/tidelift.png","831935bd53d7d2d4eea9427c5f874816"],["/developer-docs/images/tighten_co.png","003364e7044150e2979cbfe03d640cec"],["/developer-docs/images/tooltwist.png","b81bfd5ae608e965d03aaa5a4164373e"],["/developer-docs/images/transition.png","5990c1dff7dc7a8fb3b34b4462bd0105"],["/developer-docs/images/typescript-type-error.png","1665e7350370c091d397383a7355d3a6"],["/developer-docs/images/usave.png","5cffd5053b1d75ae49c9b6eb176e0ccf"],["/developer-docs/images/valuecoders.png","818ca42a745e018ace0c55c36a7ae3dd"],["/developer-docs/images/vehikl.png","3bd1b88aa9d242d308e838f2342d7660"],["/developer-docs/images/vpnranks.png","a657f71ef96eb8c22c7f1496c01ca53a"],["/developer-docs/images/vue-component-with-preprocessors.png","a5cb959052c9cda793e23a6e3a6a122c"],["/developer-docs/images/vue-component.png","6a7040cfd4330a536d980c69e2e8dd18"],["/developer-docs/images/vuejobs.png","77ed618e17571d1a2d77ad7bc53e8fc4"],["/developer-docs/images/vuemastery.png","6f09ce143467fba22039bde3f2070c19"],["/developer-docs/images/vueschool.png","3d92b4f1a8fcbe3be0d0e89950a1a705"],["/developer-docs/images/vuetify.png","c7cfff77abb10162cb0b7c2ed3b6ac51"],["/developer-docs/images/webdock.png","6b8d3d271ba4d05daf83ad75d21221d1"],["/developer-docs/images/wilderminds.png","cd98b69653b51369da2e765097f13d6f"],["/developer-docs/images/x_team.png","a6cfaebb0c0dc17d348bc9c6fd5758ef"],["/developer-docs/images/y8.png","3cdd8826d3419751f40a8aa7f90cd539"],["/developer-docs/images/yakaz.png","f1918919114e35d6091e67370450e8bd"],["/developer-docs/index.html","78a9b5d8dfaaeb746e7ec1c1f42bc8d6"],["/developer-docs/js/common.js","3fd6eb4d90b6ad57886c6ede0670d59e"],["/developer-docs/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/developer-docs/js/smooth-scroll.min.js","ecaa94f311c27bd2ac704a9658ff9cef"],["/developer-docs/js/vue.js","d5c38adb09ff79efa1c4d0745dfd308c"],["/developer-docs/js/vue.min.js","17e942ea0854bd9dce2070bae6826937"],["/developer-docs/manifest.json","d321292e1c616039cb24750cefb93cc8"],["/developer-docs/menu/index.html","8ccae1741cae702efaf114c21ecb230a"],["/developer-docs/page/2/index.html","4a2c8e0fea1fc0420b652f98eff88d42"],["/developer-docs/perf/index.html","4bbebc617ae22d78694728cc23b348d1"],["/developer-docs/support-vuejs/index.html","613e39368c2f0c524559ecda3fa8d3d3"],["/developer-docs/v2/api/index.html","a421ec4f665d875d82682261f49ef020"],["/developer-docs/v2/cookbook/adding-instance-properties.html","8fb00a8447ba67a75a4b58413841ee52"],["/developer-docs/v2/cookbook/avoiding-memory-leaks.html","d3830e3ac54453cf8668fe0c4513d61c"],["/developer-docs/v2/cookbook/client-side-storage.html","114fa1c5d5ad68c5ce2f918734c1792f"],["/developer-docs/v2/cookbook/creating-custom-scroll-directives.html","3757502b0799dd536f637291b5a41447"],["/developer-docs/v2/cookbook/debugging-in-vscode.html","294c97d96b989373e28dc095d92dc898"],["/developer-docs/v2/cookbook/dockerize-vuejs-app.html","c1387ea9cb4ead888f5b60d90da88c9f"],["/developer-docs/v2/cookbook/editable-svg-icons.html","f8443d1b3f881a0f9c1da6e5d3fd01cd"],["/developer-docs/v2/cookbook/form-validation.html","540a9025394ebc3b614fc97a77a5d14e"],["/developer-docs/v2/cookbook/index.html","fdaeb04b7bc024527f8430cdbdf1de33"],["/developer-docs/v2/cookbook/packaging-sfc-for-npm.html","36482cbe19f46acc5397f9a884974cd8"],["/developer-docs/v2/cookbook/practical-use-of-scoped-slots.html","b69bd70555ddac1834185f2275f54161"],["/developer-docs/v2/cookbook/serverless-blog.html","ceb50e81c9ac1ea2050318393225a1fd"],["/developer-docs/v2/cookbook/unit-testing-vue-components.html","ad31917d79dedf8633bc92747a83370e"],["/developer-docs/v2/cookbook/using-axios-to-consume-apis.html","e731567744c8de254767d36a39657739"],["/developer-docs/v2/examples/commits.html","c537eafd7814ab80aa502da1bc1c2507"],["/developer-docs/v2/examples/deepstream.html","23fc2c7594cc49ee33aef1f5fcba470b"],["/developer-docs/v2/examples/elastic-header.html","3a6c03b9a0c02ebe1c527e8116b89efb"],["/developer-docs/v2/examples/firebase.html","af5bb7ec66ff3e519274b42700b087d0"],["/developer-docs/v2/examples/grid-component.html","fce845aa22614032cb72d320bbff0fa8"],["/developer-docs/v2/examples/hackernews.html","2940f9ad0f9a392d5ffb43e7009d5c0c"],["/developer-docs/v2/examples/index.html","8feb87d9337aafb6b41288f1a4463633"],["/developer-docs/v2/examples/modal.html","9e864f1fda5a9b58e824ac9cfbc47a4b"],["/developer-docs/v2/examples/select2.html","a5f312f65fdfd255a40ce8d68c12518a"],["/developer-docs/v2/examples/svg.html","dd4d0090f1484891e6f41de46800ff44"],["/developer-docs/v2/examples/themes.html","4a83f910e7ce4e628e09fe951b8e46e6"],["/developer-docs/v2/examples/todomvc.html","169d47eac567f769fcee0de15b6c5482"],["/developer-docs/v2/examples/tree-view.html","766d4db205ab72f1ff1aba2b2aab6104"],["/developer-docs/v2/guide/class-and-style.html","0550e773478823edb07cb42a82fc7a89"],["/developer-docs/v2/guide/comparison.html","ebb0d2468a224d3ab3dcc855c1b939dd"],["/developer-docs/v2/guide/components-custom-events.html","a18c715704161ff4cc7a403957be3124"],["/developer-docs/v2/guide/components-dynamic-async.html","ca06a2c20ad7e9096ae1a46fd5d0442d"],["/developer-docs/v2/guide/components-edge-cases.html","9715ec40a2eeebe5b35c0dc7924384d3"],["/developer-docs/v2/guide/components-props.html","7ef6269f7c6cf32f4db0546b7afc8702"],["/developer-docs/v2/guide/components-registration.html","88501d4ee3a6e7be3b34983e76159a2d"],["/developer-docs/v2/guide/components-slots.html","c0a24636eecd5f2ce3520d390985f232"],["/developer-docs/v2/guide/components.html","7a099008c111082d54a3a7ea998d1dc7"],["/developer-docs/v2/guide/computed.html","c05535535962bc40a8f9e94bfbceb554"],["/developer-docs/v2/guide/conditional.html","8d6ea2239b298f0555cd563d0440d3d2"],["/developer-docs/v2/guide/custom-directive.html","ee6378fc83e348a0cb5f102b44c90e84"],["/developer-docs/v2/guide/deployment.html","473483e725c9ab2fc123a810392592a5"],["/developer-docs/v2/guide/events.html","e95bb087cb84a17d84901a9338d2e5a8"],["/developer-docs/v2/guide/filters.html","05da8a5835057f0671c5d39fb6f0a8b4"],["/developer-docs/v2/guide/forms.html","f247d5ca32a6f7882769fc23909d6a60"],["/developer-docs/v2/guide/index.html","010ca52314396d0a1f9cdf02d853b43f"],["/developer-docs/v2/guide/installation.html","3196bb760cb97705551671f1f5c057ce"],["/developer-docs/v2/guide/instance.html","cc91b1bc832395f3fb32a6aaf804297d"],["/developer-docs/v2/guide/join.html","98308774494e10cf66e104ff0167299f"],["/developer-docs/v2/guide/list.html","bc6414555b31b25c26d91fc3f4eec3ef"],["/developer-docs/v2/guide/migration-vue-router.html","24c1c82e6da34e719fa0363fe49d2168"],["/developer-docs/v2/guide/migration-vuex.html","40732f2769530a671f3350d18716e765"],["/developer-docs/v2/guide/migration.html","357b7a72b87809cd5635494edc22d9f6"],["/developer-docs/v2/guide/mixins.html","9eeab3dec309d41604354e0a765bb705"],["/developer-docs/v2/guide/plugins.html","23d0e14988c453e4a86179c7cb2f7dd5"],["/developer-docs/v2/guide/reactivity.html","11c581305590e3e62e3f550a6a75cb57"],["/developer-docs/v2/guide/render-function.html","7c017bd363bddb5314a7a50262384834"],["/developer-docs/v2/guide/routing.html","eaa0af540f199a48063a83835ae9407d"],["/developer-docs/v2/guide/single-file-components.html","fd73847d4afecb099a0bd6964eb7a233"],["/developer-docs/v2/guide/ssr.html","9b47a148741a510e18036484a15b93d5"],["/developer-docs/v2/guide/state-management.html","9e1bf4809bb3b5ecadbcd29f75a93f0e"],["/developer-docs/v2/guide/syntax.html","b4338e0ba651f88828e967c3cd312861"],["/developer-docs/v2/guide/team.html","d0b964353b2b939c26a070d3e4dbd677"],["/developer-docs/v2/guide/transitioning-state.html","0c6ca564a4c0b875db88cd8a5591bd2b"],["/developer-docs/v2/guide/transitions.html","bddbb6c1bad2b6bf3111549d9c111380"],["/developer-docs/v2/guide/typescript.html","50af44d37ac053113d445c3f8de94f84"],["/developer-docs/v2/guide/unit-testing.html","2ca91c8a92f9e3350f7c9c1ba7ab49f3"],["/developer-docs/v2/search/index.html","db13c2e5145a5c827d3bdc7e491fa9c8"],["/developer-docs/v2/style-guide/index.html","adc0de031bae99fb62b50ce4f91ddd41"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.networkFirst, {"origin":"sendgrid.sp1.convertro.com"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"ad.doubleclick.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"maxcdn.bootstrapcdn.com"});




