GuildPal.controllers

  .controller 'SettingsIndexController', ($scope, $localstorage, ACCOUNTKEY_LOCALSTORAGE_KEY, $ionicModal) ->
    $scope.hasAccountkey = () -> !!$localstorage.get ACCOUNTKEY_LOCALSTORAGE_KEY
    $ionicModal.fromTemplateUrl 'templates/settings/modals/account-key.html',
      scope: $scope
    .then (modal) ->
      $scope.accountModal = modal