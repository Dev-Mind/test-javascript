(function(module) {
try {
  module = angular.module('jstest-templates');
} catch (e) {
  module = angular.module('jstest-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/footer.html',
    '<div class="mdl-grid">\n' +
    '    <div class="mdl-cell mdl-cell--6-col">\n' +
    '        <p>© 2015 Copyright Dev-Mind</p>\n' +
    '    </div>\n' +
    '    <div class="mdl-cell mdl-cell--6-col">\n' +
    '        <div class="jt-social">\n' +
    '            <a href="https://twitter.com/guillaumeehret" target="social">\n' +
    '                <img src="img/twitter.svg" style="fill: #ffffff;">&nbsp;@guillaumeehret\n' +
    '            </a>\n' +
    '            &nbsp;&nbsp;\n' +
    '            <a href="https://plus.google.com/+GuillaumeEhret" target="social">\n' +
    '                <img src="img/google.svg">&nbsp;+GuillaumeEhret\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);
})();
