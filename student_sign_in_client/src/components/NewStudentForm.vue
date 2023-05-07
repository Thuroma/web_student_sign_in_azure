<template>
    <div>
        <!-- Template/HTML here -->

    <!-- Show errors from form validation, errors data modified by click method -->
    <div class="alert alert-danger" v-if="errors.length > 0">
        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
    </div>

    <div class="card add-student m-2 p-2">
        <h4 class="card-title">Add new student</h4>

        <div class="form-group">
            <label for="name">Name</label>
            <!-- v-model newStudentName, input alters data -->
            <input id="name" class="form-control" v-model.trim="newStudentName">
        </div>
        <div class="form-group">
            <label for="starID">Star ID</label>
            <!-- v-model newStarID, input alters data -->
            <input id="starID" class="form-control" v-model.trim="newStarID">
        </div>
        <!-- v-on:click event handler, triggers addStudent method -->
        <button class="btn btn-primary" v-on:click="addStudent">Add</button>
    </div>

    </div>
</template>

<script>

// This file will be read by another file, what's in here will be accessable
export default {
    name: 'NewStudentForm',
    emits: ['student-added'],   // Document events this component emits
    data() {
        return {
            newStudentName: '',
            newStarID: '',
            errors: [],
        }
    },
    methods: {
        addStudent() {
           
            this.errors = []    // clear error array

            // Check for name
            if (!this.newStudentName) {
                this.errors.push('Student name must be entered.')
            }

            // Check for StarID
            if (!this.newStarID) {
                this.errors.push('StarID must be entered.')
            }

            // if there are no errors
            if (this.errors.length == 0) {
                let student = { name: this.newStudentName, starID: this.newStarID, present: false }

                // emit message to parent with new student
                this.$emit('student-added', student)
                
                // Clear input elements
                this.newStudentName = ''
                this.newStarID = ''

            } 
        }
    }
}
</script>

<style scoped>

</style>