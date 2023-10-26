<script setup>
import PageTitle from '@/components/PageTitle.vue'
import TableRow from '@/components/TableRow.vue'
import { educationData } from '@/helpers/data.js'
</script>

<template>
  <PageTitle
    background-title="Example table"
    foreground-title="TABLE"
  />
  <section>
    <div class="items-center justify-center m-5 w-max rounded-lg overflow-hidden">
      <table class="table-auto">
        <thead class="bg-zinc-500">
          <tr>
            <th class="border-b border-slate-600 font-medium p-3 text-slate-100 text-left">
              First Name
            </th>
            <th class="border-b border-slate-600 font-medium p-3 text-slate-100 text-left">
              Last Name
            </th>
            <th class="border-b border-slate-600 font-medium p-3 text-slate-100 text-left">
              Location
            </th>
            <th class="border-b border-slate-600 font-medium p-3 text-slate-100 text-left">
              Faculty
            </th>
            <th class="border-b border-slate-600 font-medium p-3 text-slate-100 text-left">
              Year
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            v-for="education in educationData"
            :key="education.key"
            :first-name="education.firstName"
            :last-name="education.lastName"
            :location="education.location"
            :faculty="education.faculty"
            :year="education.year"
          />
        </tbody>
      </table>
    </div>
  </section>
</template>
