module.exports = (sequelize, DataTypes) => {

    let Student = sequelize.define('Student', {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        starID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: /^[a-z]{2}\d{4}[a-z]{2}$/
                // Regular expression to match the pattern of a StarID,
                // two lowercase letters a-z, four digits, two lowercase letters a-z
                // https://regex101.com/r/GDMDuY/1/
            }
        },

        present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })

    // force specifies whether to drop the table or not
    // true = drop table every time app restarts. Need this setting of table schema changed.
    // false = keep table
    Student.sync( {force: false} ).then( () => {
        console.log('Synced student table ')
    })

    return Student
}