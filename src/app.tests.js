import angular from 'angular'
import 'ui.router'
import 'angular-mocks'

const testsContext = require.context("./", true, /\.test$/);
testsContext.keys().forEach(testsContext);
