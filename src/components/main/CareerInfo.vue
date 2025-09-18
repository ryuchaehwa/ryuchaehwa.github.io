<template>
    <div class="section-title"> 경력 Career</div>
    <div class="ci-container">
        <div class="ci-timeline">
            <Timeline :value="events">
                <template #opposite="slotProps">
                    <small class="text-surface-500 dark:text-surface-400">{{ slotProps.item.date }}</small>
                </template>
                <template #content="slotProps">
                    {{ slotProps.item.status }}
                </template>
            </Timeline>
        </div>
        <div class="ci-content">
            123
        </div>
    </div>
</template>

<script setup>
import Timeline from 'primevue/timeline'
import moment from 'moment'

let events = [
    {
        status: 1,
        date: moment().format('YY-MM-DD')
    },
    {
        status: 2
    },
    {
        status: 3
    }
]
</script>

<style setup>
/* ci: career info */
.ci-container {
    display: flex;
    height: 100vh
}

.ci-timeline {
    width: 30%;
    /* background-color: lightblue; */
    border-right: 1px solid #fff
}

.ci-content {
    /* background-color: lightcoral; */
    width: 70%;
    padding: 0 20px
}
</style>