GuildPal.services
    .factory '$localstorage' , ($window) ->
        {
            set: (key, value) ->
                $window.localstorage[key] = value

            get: (key, defaultValue) ->
                $window.localstorage[key] || defaultValue

            setObject: (key, value) ->
                $window.localstorage[key] = JSON.stringify value
                
            getObject: (key) ->
                JSON.parse($window.localstorage[key] || '{}')
        }