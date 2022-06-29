module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        ranking: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'genres',
        timestamps: false
    };
    const Genre = sequelize.define(alias, cols, config)

    Genre.associate = function(models){
        Genre.hasMany(models.Movie, {
            
            as:'movies', //nombre de la union, puede ser cualquier nombre, yo le puse 'movies'
            foreignKey:'genre_id'
        });

       
    }

    return Genre
}