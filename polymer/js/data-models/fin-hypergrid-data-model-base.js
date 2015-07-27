'use strict';

(function() {

    var noop = function() {};


    var merge = function(target, source) {
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }
    };

    Polymer('fin-hypergrid-data-model-base', { /* jshint ignore:line  */

        grid: null,

        getValue: function(x, y) {
            return x + ', ' + y;
        },

        setValue: function(x, y, value) {
            console.log('setting (' + x + ', ' + 'y) = ' + value);
        },

        getColumnCount: function() {
            return 20;
        },

        getRowCount: function() {
            return 1000;
        },

        setGrid: function(newGrid) {
            this.grid = newGrid;
        },

        getGrid: function() {
            return this.grid;
        },

        getState: function() {
            return this.getGrid().getState();
        },

        getBehavior: function() {
            return this.getGrid().getBehavior();
        },

        getCellProvider: function() {
            return this.getGrid().getCellProvider();
        },

        getImage: function(alias) {
            return this.getBehavior().getImage(alias);
        },

        changed: function() {
            this.getBehavior().changed();
        },

        initColumnIndexes: function(state) {
            this.getBehavior().initColumnIndexes(state);
        },

        toggleSort: function(x) {
            console.log('toggle column ' + x);
        },

        getCellEditorAt: function(x, y) {
            noop(x, y);
            var cellEditor = this.getGrid().resolveCellEditor('textfield');
            return cellEditor;
        },

        getColumnProperties: function(columnIndex) {
            var tableState = this.getState();
            var properties = tableState.columnProperties[columnIndex];
            if (!properties) {
                var lnfProperties = this.getGrid().getProperties();
                properties = Object.create(lnfProperties);
                tableState.columnProperties[columnIndex] = properties;

                properties.rowHeader = Object.create(properties, {
                    font: {
                        configurable: true,
                        get: function() {
                            return this.rowHeaderFont;
                        },
                        set: function(value) {
                            this.rowHeaderFont = value;
                        }
                    },
                    color: {
                        configurable: true,
                        get: function() {
                            return this.rowHeaderColor;
                        },
                        set: function(value) {
                            this.rowHeaderColor = value;
                        }
                    },
                    backgroundColor: {
                        configurable: true,
                        get: function() {
                            return this.rowHeaderBackgroundColor;
                        },
                        set: function(value) {
                            this.rowHeaderBackgroundColor = value;
                        }
                    },
                    foregroundSelectionColor: {
                        configurable: true,
                        get: function() {
                            return this.rowHeaderForegroundSelectionColor;
                        },
                        set: function(value) {
                            this.rowHeaderForegroundSelectionColor = value;
                        }
                    },
                    backgroundSelectionColor: {
                        configurable: true,
                        get: function() {
                            return this.rowHeaderBackgroundSelectionColor;
                        },
                        set: function(value) {
                            this.rowHeaderBackgroundSelectionColor = value;
                        }
                    }
                });

                properties.columnHeader = Object.create(properties, {
                    font: {
                        configurable: true,
                        get: function() {
                            return this.columnHeaderFont;
                        },
                        set: function(value) {
                            this.columnHeaderFont = value;
                        }
                    },
                    color: {
                        configurable: true,
                        get: function() {
                            return this.columnHeaderColor;
                        },
                        set: function(value) {
                            this.columnHeaderColor = value;
                        }
                    },
                    backgroundColor: {
                        configurable: true,
                        get: function() {
                            return this.columnHeaderBackgroundColor;
                        },
                        set: function(value) {
                            this.columnHeaderBackgroundColor = value;
                        }
                    },
                    foregroundSelectionColor: {
                        configurable: true,
                        get: function() {
                            return this.columnHeaderForegroundSelectionColor;
                        },
                        set: function(value) {
                            this.columnHeaderForegroundSelectionColor = value;
                        }
                    },
                    backgroundSelectionColor: {
                        configurable: true,
                        get: function() {
                            return this.columnHeaderBackgroundSelectionColor;
                        },
                        set: function(value) {
                            this.columnHeaderBackgroundSelectionColor = value;
                        }
                    }
                });

            }
            return properties;
        },

        setColumnProperties: function(columnIndex, properties) {
            var columnProperties = this.getColumnProperties(columnIndex);
            merge(columnProperties, properties);
            this.changed();
        },

    });

})();
