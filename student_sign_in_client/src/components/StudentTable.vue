<template>
    <div>
        <!-- Template/HTML here -->

    <div class="card student-list m-2 p-2">
        <h4 class="card-title">Student List</h4>

        <div class="edit-table-toggle form-check">
            <input type="checkbox" id="edit-table" class="form-check-input" v-model="editTable">
            <label for="edit-table" class="form-check-label">Edit Table</label>
        </div>

        <div id="student-table">
            <table class="table">
                <tr>
                    <th>Name</th>
                    <th>StarID</th>
                    <th>Present?</th>
                    <th v-show="editTable">Delete</th>
                </tr>

                <student-row 
                    v-for="student in students" 
                    v-bind:student="student"
                    v-bind:key="student.starID"
                    v-bind:edit="editTable"
                    v-on:student-arrived-or-left="arrivedOrLeft"
                    v-on:delete-student="deleteStudent">
                </student-row>

            </table>
        </div>
    </div>

    </div>
</template>

<script>
// Import StudentRow to be used in this parent component
import StudentRow from '@/components/StudentRow.vue'

export default {
    // create component here

    name: 'StudentTable',
    components: {
        StudentRow
    },
    emits: ['student-arrived-or-left'],
    props: {
        students: Array
    },
    data() {
        return {
            editTable: false
        }
    },
    methods: {
        arrivedOrLeft(student, present) {
            // emit message to parent
            this.$emit('student-arrived-or-left', student, present)
        },
        deleteStudent(student) {
            this.$emit('delete-student', student)
        }
    }
}
</script>

<style scoped>



</style>