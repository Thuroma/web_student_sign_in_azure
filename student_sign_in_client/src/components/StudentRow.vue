<template>
    <!-- create table rows 
    Each row will have a checkbox, bound to the app's data 
    When the checkbox is checked/unchecked, the student will be signed in/out
    v-bind assigns or unassigns class attribute -->
    <tr v-bind:class=" { present: student.present, absent: !student.present } ">
        <td>{{ student.name }}</td>
        <td>{{ student.starID }}</td>
        <td>
            <!-- Clicking triggers arrivedOrLeft method, $event.target is component .checked is if checked -->
            <input type="checkbox" v-bind:checked="student.present" v-on:change="arrivedOrLeft(student, $event.target.checked)">
        </td>
        <td v-show="edit"><img v-on:click="deleteStudent" src="@/assets/delete.png"></td>
    </tr>
</template>

<script>
    export default {
        name: 'StudentRow',
        props: {
            student: Object,
            edit: Boolean
        },
        methods: {
            arrivedOrLeft(student, present) {
                this.$emit('student-arrived-or-left', student, present)
            },
            deleteStudent() {
                if (confirm(`Delete ${this.student.name}?`)) {
                    this.$emit('delete-student', this.student)
                }
            }
        }
    }
</script>

<style scoped>

.present {
    color: gray;
    font-style: italic;
    background-color: rgb(217, 255, 211);
}

.absent {
    color: black;
    font-weight: bold;
    background-color: rgb(255, 224, 227);
}

img {
    height: 25px;
}
</style>