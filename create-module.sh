#!/bin/bash

module=$*
root=$PWD

createReducer(){
  if [ ! -d $root/app/modules/$module/reducers ]; then
    mkdir -p $root/app/modules/$module/reducers
    touch $root/app/modules/$module/reducers/index.js

    echo "const INITIAL_STATE = {};

export const articleReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};" >> $root/app/modules/$module/reducers/index.js
  fi
}

createActions(){
  if [ ! -d $root/app/modules/$module/actions ]; then
    mkdir -p $root/app/modules/$module/actions
    touch $root/app/modules/$module/actions/index.js
  fi
}

createContainers(){
  if [ ! -d $root/app/modules/$module/containers ]; then
    mkdir -p $root/app/modules/$module/containers
  fi
}

createComponents(){
  if [ ! -d $root/app/modules/$module/components ]; then
    mkdir -p $root/app/modules/$module/components
  fi
}

connectWithRootReducer(){
  reducerRoot=$root/app/reducers/index.js
  if [ -f $reducerRoot ] && ! grep -q ${module}Reducer $reducerRoot ; then
    sed -i.old "1s;^;import { ${module}Reducer } from \"../modules/${module}/reducers\"\\;\\`echo -e '\n\r'`;" $reducerRoot
    sed -i.old "s/combineReducers({/combineReducers({\\`echo -e '\n\r'`  ${module}: ${module}Reducer,/" $reducerRoot
  fi
}

rootReducerInit(){
  echo "import { combineReducers } from \"redux\";

const appReducers = combineReducers({
});

const reducers = (state, action) => {
  return appReducers(state, action);
};

export default reducers;" >> $root/app/reducers/index.js
}

createStore(){
  echo "import { createStore, applyMiddleware } from \"redux\";
import thunk from \"redux-thunk\";
import reducers from \"../reducers\";

import { createLogger } from \"redux-logger\";

const LoggerMiddleware = createLogger();

export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk, LoggerMiddleware)
);" >> $root/app/store/index.js
}

createAppFolders(){
  if [ ! -d $root/app/modules ]; then
    mkdir -p $root/app/modules
  fi
  if [ ! -d $root/app/reducers ]; then
    mkdir -p $root/app/reducers
    touch $root/app/reducers/index.js
    rootReducerInit
  fi
  if [ ! -d $root/app/store ]; then
    mkdir -p $root/app/store
    touch $root/app/store/index.js
    createStore
  fi
  if [ ! -d $root/app/config ]; then
    mkdir -p $root/app/config
    touch $root/app/config/index.js
  fi
  if [ ! -d $root/app/lib ]; then
    mkdir -p $root/app/lib
    touch $root/app/lib/index.js
  fi
  if [ ! -d $root/app/routes ]; then
    mkdir -p $root/app/routes
    touch $root/app/routes/index.js
  fi
}

destroy(){
  if [ -f $root/app/reducers/index.js.old ]; then
    rm -f $root/app/reducers/index.js.old
  fi
}

boilerplate(){
  createAppFolders
  mkdir -p $root/app/modules/$module
  createReducer
  connectWithRootReducer
  createActions
  createContainers
  createComponents
  destroy
}

appDir(){
  mkdir -p $root/app
  boilerplate
}

if [ ! -d $root/app ]; then
  appDir
else
  boilerplate
fi
