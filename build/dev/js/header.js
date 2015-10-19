(function(module) {
try {
  module = angular.module('jstest-templates');
} catch (e) {
  module = angular.module('jstest-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/header.html',
    '<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">\n' +
    '    <div class="mdl-layout__header">\n' +
    '        <!-- Navigation for large screens. -->\n' +
    '        <div class="mdl-layout__header-row">\n' +
    '            <div class="mdl-layout-icon">\n' +
    '                <a ui-sref="home" class="link_home"><img src="img/logo_long_1400.png" alt="Dev-Mind"></a>\n' +
    '            </div>\n' +
    '\n' +
    '            <!-- Add spacer, to align navigation to the right -->\n' +
    '            <div class="mdl-layout-spacer"></div>\n' +
    '\n' +
    '            <!-- Navigation. We hide it in small screens. -->\n' +
    '            <nav class="mdl-navigation mdl-layout--large-screen-only">\n' +
    '                <div class="cesar-menu mdl-navigation__link cesar-navigation__link">\n' +
    '                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-button--mini-fab link_talk"\n' +
    '                       ui-sref="talk">\n' +
    '                        <i class="material-icons">view_list</i>\n' +
    '                    </a>\n' +
    '                </div>\n' +
    '            </nav>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '    <!-- Navigation panel for small screens. -->\n' +
    '    <div class="mdl-layout__drawer mdl-layout--small-screen-only">\n' +
    '        <span class="mdl-layout-title">Mix-IT</span>\n' +
    '        <nav class="mdl-navigation">\n' +
    '            <a class="mdl-navigation__link link_home" ui-sref="home">Home</a>\n' +
    '            <a class="mdl-navigation__link link_talk" ui-sref="talk">Talks</a>\n' +
    '        </nav>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<script ng-if="!isAngularApp" src="js/jquery/controllers/menu.js"></script>');
}]);
})();
