<template>
  <main class="xl:ml-8 xl:-mr-8 xl:mt-1.5">
  <form onsubmit="return false;" class="space-y-8 divide-y divide-gray-200 ml-4 m-4">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div>
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Settings
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            This information is not publicly displayed and remains on our database.
          </p>
        </div>

        <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="username" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Username
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex rounded-md shadow-sm">
              <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                github.com/
              </span>
                <input type="text" v-model="settings.github" placeholder="username" name="username" id="username" autocomplete="username" class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
              </div>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="about" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              About
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <textarea id="about" v-model="settings.about" name="about" rows="3" class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"></textarea>
              <p class="mt-2 text-sm text-gray-500">Write a few sentences about your business.</p>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
            <label class="block text-sm font-medium text-gray-700">
              Photo
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="flex items-center">
              <span class="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <img class="h-full w-full text-gray-300" :src="imgProfile">
              </span>
                <!-- TODO: Add Emit -->
                <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Personal Information
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Use a permanent address where you can receive mail.
          </p>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="first" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              First name
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" v-model="settings.first" name="first_name" id="first" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="last" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Last name
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" v-model="settings.last" name="last_name" id="last" autocomplete="family-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Email address
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input id="email" v-model="settings.email" name="email" type="email" autocomplete="email" class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="region" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Country / Region
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <select id="region" v-model="settings.country" name="country" autocomplete="country" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="street_address" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Street address
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" v-model="settings.street" name="street_address" id="street_address" autocomplete="street-address" class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="city" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              City
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" v-model="settings.city" name="city" id="city" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="state" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              State / Province
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="state" v-model="settings.state" id="state" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="zip" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              ZIP / Postal
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="zip" v-model="settings.zip" id="zip" autocomplete="postal-code" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
            </div>
          </div>
        </div>
      </div>
<!--
      <div class="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Notifications
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            We'll always let you know about important changes, but you pick what else you want to hear about.
          </p>
        </div>
        <div class="space-y-6 sm:space-y-5 divide-y divide-gray-200">
          <div class="pt-6 sm:pt-5">
            <div role="group" aria-labelledby="label-email">
              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                <div>
                  <div class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="label-email">
                    By Email
                  </div>
                </div>
                <div class="mt-4 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg space-y-4">
                    <div class="relative flex items-start">
                      <div class="flex items-center h-5">
                        <input id="comments" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="comments" class="font-medium text-gray-700">Comments</label>
                        <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                      </div>
                    </div>
                    <div>
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input id="candidates" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                          <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input id="offers" name="offers" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="offers" class="font-medium text-gray-700">Offers</label>
                          <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-6 sm:pt-5">
            <div role="group" aria-labelledby="label-notifications">
              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                <div>
                  <div class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="label-notifications">
                    Push Notifications
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="max-w-lg">
                    <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                    <div class="mt-4 space-y-4">
                      <div class="flex items-center">
                        <input id="push_everything" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                        <label for="push_everything" class="ml-3 block text-sm font-medium text-gray-700">
                          Everything
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input id="push_email" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                        <label for="push_email" class="ml-3 block text-sm font-medium text-gray-700">
                          Same as email
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input id="push_nothing" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                        <label for="push_nothing" class="ml-3 block text-sm font-medium text-gray-700">
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
-->
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button class="invisible bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Cancel
        </button>
        <button @click="submitSettings()" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Save
        </button>
      </div>
    </div>
  </form>
  <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
    <!-- Plan -->
    <section class="ml-3.5" aria-labelledby="plan_heading">
      <form>
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h2 id="plan_heading" class="text-lg leading-6 font-medium text-gray-900">Plan</h2>
            </div>

            <fieldset>
              <legend class="sr-only">
                Pricing plans
              </legend>
              <ul class="relative xl:mx-4.5 bg-white rounded-md -space-y-px">

                <li :class="pricing.current === 'Guest' ? 'bg-indigo-500 text-gray-50':'' " class="mb-3">
                  <!-- On: "bg-orange-50 border-orange-200 z-10", Off: "border-gray-200" -->
                  <div class="relative border p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
                    <label class="flex items-center text-sm cursor-pointer">
                      <input :value="pricing.monthly ? 0:0" name="pricing_plan" v-model="settings.picked" type="radio" class="h-4 w-4 text-orange-500 cursor-pointer focus:ring-gray-900 border-gray-300" aria-describedby="plan-option-pricing-0 plan-option-limit-0">
                      <span :class="pricing.current === 'Guest' ? 'text-gray-50':'text-gray-900' " class="ml-3 font-medium">Guest</span>
                    </label>
                    <p id="plan-option-pricing-free" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                      <!-- On: "text-orange-900", Off: "text-gray-900" -->
                      <span v-if="pricing.monthly === false" class="">$0 <span class="text-xs font-thin">/ mo</span></span>
                      <!-- On: "text-orange-700", Off: "text-gray-500" -->
                      <span v-else>$0 <span class="text-xs font-thin">/ 3mo</span></span>
                    </p>
                    <!-- On: "text-orange-700", Off: "text-gray-500" -->
                    <p id="plan-option-limit-free" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right">0 hours per month</p>
                  </div>
                </li>

                <li :class="pricing.current === 'Standard' ? 'bg-indigo-500 text-gray-50':'' ">
                  <!-- On: "bg-orange-50 border-orange-200 z-10", Off: "border-gray-200" -->
                  <div class="relative border rounded-tl-md rounded-tr-md p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
                    <label class="flex items-center text-sm cursor-pointer">
                      <input :value="pricing.monthly ? 1599:599" name="pricing_plan" v-model="settings.picked" type="radio" class="h-4 w-4 text-orange-500 cursor-pointer focus:ring-gray-900 border-gray-300" aria-describedby="plan-option-pricing-0 plan-option-limit-0">
                      <span :class="pricing.current === 'Standard' ? 'text-gray-50':'text-gray-900' " class="ml-3 font-medium">Standard</span>
                    </label>
                    <p id="plan-option-pricing-0" :class="pricing.current === 'Standard' ? 'text-gray-50':'text-gray-700'" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                      <!-- On: "text-orange-900", Off: "text-gray-900" -->
                      <span v-if="pricing.monthly === false" class="">$599.00 <span class="text-xs font-thin">/ mo</span></span>
                      <!-- On: "text-orange-700", Off: "text-gray-500" -->
                      <span v-else>$1,599.00 <span class="text-xs font-thin">/ 3mo</span></span>
                    </p>
                    <!-- On: "text-orange-700", Off: "text-gray-500" -->
                    <p :class="pricing.current === 'Standard' ? 'text-gray-50':'text-gray-600'" id="plan-option-limit-0" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 0 md:text-right">20 hours per month</p>
                  </div>
                </li>

                <li :class="pricing.current === 'Business' ? 'bg-indigo-500 text-gray-50':'' ">
                  <!-- On: "bg-orange-50 border-orange-200 z-10", Off: "border-gray-200" -->
                  <div class="relative border-l border-r border-gray-200 p-5 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
                    <label class="flex items-center text-sm cursor-pointer">
                      <input :value="pricing.monthly ? 3499:1299" v-model="settings.picked" name="pricing_plan" type="radio" class="h-4 w-4 text-orange-500 cursor-pointer focus:ring-gray-900 border-gray-300" aria-describedby="plan-option-pricing-1 plan-option-limit-1">
                      <span :class="pricing.current === 'Business' ? 'text-gray-50':'text-gray-900' " class="ml-3 font-medium text-gray-900">Business</span>
                    </label>
                    <p id="plan-option-pricing-1" :class="pricing.current === 'Standard' ? 'text-gray-50':'text-gray-700'" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                      <!-- On: "text-orange-900", Off: "text-gray-900" -->
                      <span v-if="pricing.monthly === false" class="">$1,299.00 <span class="text-xs font-thin">/ mo</span></span>
                      <!-- On: "text-orange-700", Off: "text-gray-500" -->
                      <span v-else>$3,499.00 <span class="text-xs font-thin">/ 3mo</span></span>
                    </p>
                    <!-- On: "text-orange-700", Off: "text-gray-500" -->
                    <p id="plan-option-limit-1" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 text-gray-600 md:text-right">40 hours per month</p>
                  </div>
                </li>

                <li :class="pricing.current === 'Premium' ? 'bg-indigo-500 text-gray-50':'' ">
                  <!-- On: "bg-orange-50 border-orange-200 z-10", Off: "border-gray-200" -->
                  <div class="relative border border-gray-200 rounded-b-md p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
                    <label class="flex items-center text-sm cursor-pointer">
                      <input :value="pricing.monthly ? 7499:2799" v-model="settings.picked" name="pricing_plan" type="radio" class="h-4 w-4 text-orange-500 cursor-pointer focus:ring-gray-900 border-gray-300" aria-describedby="plan-option-pricing-2 plan-option-limit-2">
                      <span :class="pricing.current === 'Premium' ? 'text-gray-50':'text-gray-900'" class="ml-3 font-medium text-gray-900">Premium</span>
                    </label>
                    <p id="plan-option-pricing-2" :class="pricing.current === 'Standard' ? 'text-gray-50':'text-gray-700'" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                      <!-- On: "text-orange-900", Off: "text-gray-900" -->
                      <span v-if="pricing.monthly === false" class="">$2,799.00 <span class="text-xs font-thin">/ mo</span></span>
                      <!-- On: "text-orange-700", Off: "text-gray-500" -->
                      <span v-else>$7,499.00 <span class="text-xs font-thin">/ 3mo</span></span>
                    </p>
                    <!-- On: "text-orange-700", Off: "text-gray-500" -->
                    <p id="plan-option-limit-2" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 text-gray-600 md:text-right">80 hours per month</p>
                  </div>
                </li>

              </ul>
            </fieldset>

            <div class="flex items-center">
              <!-- On: "bg-orange-500", Off: "bg-gray-200" -->

              <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-1000 ease-in">
                <input v-model="pricing.monthly" type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
              </div>
              <label for="toggle" class="text-xs text-gray-700">{{ pricing.monthly ? 'Quarterly Billing (Save up to 15%)':'Monthly Billing' }}</label>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button class="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Request Invoice
            </button>
          </div>
        </div>
      </form>
    </section>

    <!-- Billing history -->
    <section class="p-5" aria-labelledby="billing_history_heading">
      <div class="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 sm:px-6">
          <h2 id="billing_history_heading" class="text-lg leading-6 font-medium text-gray-900">Billing history</h2>
        </div>
        <div class="mt-6 flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden border-t border-gray-200">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <!--
                      `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                    -->
                    <th scope="col" class="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span class="sr-only">View receipt</span>
                    </th>
                  </tr>
                  </thead>
                  <!--TODO: Create Loop-->
                  <tbody v-if="false" class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1/1/2020
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Business Plan - Annual Billing
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      CA$109.00
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" class="text-orange-600 hover:text-orange-900">View receipt</a>
                    </td>
                  </tr>

                  <!-- More items... -->
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </main>
</template>

<script>
export default {
  name: "settings",

  data: () => ({
    pricing: {
      monthly: false,
      current: 'Guest',
    },

    settings: {
      github: '',
      about: '',
      first: '',
      last: '',
      email: '',
      street: '',
      country: '',
      city: '',
      state: '',
      zip: '',
      selected: '',
      picked: 0,
    },

  }),

  props: {
    imgProfile: {
      String
    }
  },

  methods: {
    async submitSettings() {
      alert('submitting')
      const messageRef = this.$fire.database.ref('users/'+this.$store.state.user.uid)
      try {
        await messageRef.set({
          project: 0,
          plan: {
            guest: true,
            name: 'Guest'
          },
          activity: true,
          github: {
            enabled: true,
            repository: '',
            name: this.settings.github
          },
          settings: {
            about: this.settings.about,
            first_name: this.settings.first,
            last_name: this.settings.last,
            email_address:this.settings.email,
            country: this.settings.country,
            address: this.settings.street,
            city: this.settings.city,
            state: this.settings.state,
            zip: this.settings.zip

          }
        })
        alert('submitted')
      } catch (e) {


      }

    }

  }
}
</script>

<style scoped>

.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68D391;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #68D391;
}


</style>
