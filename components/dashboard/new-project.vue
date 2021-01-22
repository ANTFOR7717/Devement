<template>
  <form class="space-y-8 divide-y divide-gray-200 m-7">
    <div class="space-y-6">
      <div>
        <h1 class="text-lg leading-6 font-medium text-gray-900">
          Project Settings
        </h1>
        <p class="mt-1 text-sm text-gray-500">
          Let’s get started by filling in the information below to create your new project.
        </p>
      </div>

      <div>
        <label for="project_name" class="block text-sm font-medium text-gray-700">
          Project Name
        </label>
        <div class="mt-1">
          <input type="text" name="project_name" id="project_name" class="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md">
        </div>
      </div>

      <div>
        <label for="description" class="block text-sm font-medium text-gray-700">
          Description
        </label>
        <div class="mt-1">
          <textarea id="description" name="description" rows="3" class="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md"></textarea>
        </div>
      </div>

      <div class="space-y-2">
        <div class="space-y-1">
          <label for="add_team_members" class="block text-sm font-medium text-gray-700">
            Add Business Plan
          </label>
          <div class="flex">
            <div class="flex-grow">
              <input type="text" name="add_team_members" id="add_team_members" class="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md" placeholder="Email address" aria-describedby="add_team_members_helper">
            </div>
            <span class="ml-3">
              <button type="button" class="bg-white inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500">
                <!-- Heroicon name: plus -->
                <svg class="-ml-2 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>
                <span>Add</span>
              </button>
            </span>
          </div>
        </div>
      </div>

      <fieldset>
        <legend class="text-sm font-medium text-gray-900">
          Privacy
        </legend>

        <div class="mt-1 bg-white rounded-md shadow-sm -space-y-px">
          <!-- On: "bg-light-blue-50 border-light-blue-200 z-10", Off: "border-gray-200" -->
          <div class="relative border rounded-tl-md rounded-tr-md p-4 flex">
            <div class="flex items-center h-5">
              <input id="settings-option-0" name="privacy_setting" type="radio" class="h-4 w-4 text-light-blue-600 cursor-pointer focus:ring-light-blue-500 border-gray-300" checked>
            </div>
            <label for="settings-option-0" class="ml-3 flex flex-col cursor-pointer">
              <!-- On: "text-light-blue-900", Off: "text-gray-900" -->
              <span class="block text-sm font-medium">
                Public access
              </span>
              <!-- On: "text-light-blue-700", Off: "text-gray-500" -->
              <span class="block text-sm">
                This project would be available to anyone who has the link (open-source)
              </span>
            </label>
          </div>

          <!-- On: "bg-light-blue-50 border-light-blue-200 z-10", Off: "border-gray-200" -->
          <div class="relative border border-gray-200 p-4 flex">
            <div class="flex items-center h-5">
              <input id="settings-option-1" name="privacy_setting" type="radio" class="h-4 w-4 text-light-blue-600 cursor-pointer focus:ring-light-blue-500 border-gray-300">
            </div>
            <label for="settings-option-1" class="ml-3 flex flex-col cursor-pointer">
              <!-- On: "text-light-blue-900", Off: "text-gray-900" -->
              <span class="block text-sm font-medium">
                Private to Project Members
              </span>
              <!-- On: "text-light-blue-700", Off: "text-gray-500" -->
              <span class="block text-sm">
                Only members of this project would be able to access
              </span>
            </label>
          </div>

        </div>
      </fieldset>


      <div class="flex justify-end">
        <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500">
          Submit Project
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "new-project"
}
</script>

<style scoped>

</style>
