(function(module) {
try {
  module = angular.module('jstest-templates');
} catch (e) {
  module = angular.module('jstest-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/error.html',
    '    <div id="mdl-error" class="jt_mdl">\n' +
    '    <div class="jt_mdl-dialog">\n' +
    '        <div class="jt_mdl-content">\n' +
    '            <div class="mdl-card jt_mdl-card mdl-shadow--2dp through mdl-shadow--16dp">\n' +
    '                <div class="mdl-card__title">\n' +
    '                    <h2 class="mdl-card__title-text">Une erreur a été détectée</h2>\n' +
    '                </div>\n' +
    '                <div class="mdl-card__supporting-text" ng-if="error">\n' +
    '                    <b>{{error.status}} {{error.statusText}}</b>\n' +
    '                    <p ng-bind="error.data"></p>\n' +
    '                </div>\n' +
    '                <div class="mdl-card__supporting-text" ng-if="!error">\n' +
    '                   <p>Impossible d\'interpréter la réponse retournée. Veuillez consulter les logs</p>\n' +
    '                </div>\n' +
    '                <div class="mdl-card__actions">\n' +
    '                    <div class="jt_mdl-button-bar">\n' +
    '                        <button class="mdl-button mdl-js-button mdl-button--primary" ng-click="closeDialog()">\n' +
    '                            Annuler\n' +
    '                        </button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>');
}]);
})();
