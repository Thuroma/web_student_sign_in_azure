<template>
    <div>
        <!-- Template/HTML here -->

    <!-- Show a message when student arrives or leaves  
    Displays welcome if present is true, else goodbye, from the most recently changed object.present -->
    <div v-if="student.name">

    <div class="alert alert-success" v-if="student.present">
        Welcome, {{ student.name }}
    </div>

    <div class="alert alert-info" v-else>
        Goodbye, {{ student.name }}. See you later!
    </div>

    </div>

    </div>
</template>

<script>

// This file will be read by another file, what's in here will be accessable
export default {
    name: 'StudentMessage',
    props: {
        student: Object
    }
}
</script>

<style scoped>

</style>