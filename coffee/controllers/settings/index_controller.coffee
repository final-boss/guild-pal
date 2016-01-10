GuildPal.controllers

  .controller 'SettingsIndexController', ($scope, $localstorage, ACCOUNTKEY_LOCALSTORAGE_KEY) ->
    $scope.hasAccountkey = () -> !!$localstorage.get ACCOUNTKEY_LOCALSTORAGE_KEY
