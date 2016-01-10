GuildPal.services
  .factory '$localstorage', ($window) ->
    {
      set: (key, value) ->
        $window.localStorage[key] = value

      get: (key, defaultValue) ->
        $window.localStorage[key] || defaultValue

      setObject: (key, value) ->
        $window.localStorage[key] = JSON.stringify value
                
      getObject: (key) ->
        JSON.parse($window.localStorage[key] || '{}')
    }
        