/**
 * SendX REST API
 * **NOTE:** All API calls contain 2 parameters - 'api_key' and 'team_id'. These can be inferred from your settings page 'https://app.sendx.io/setting' under the sections 'Api Key' and 'Team Id' respectively.  For checking language specific Clients: -  [Golang](https://github.com/sendx/sendx-api-go) -  [Python](https://github.com/sendx/sendx-api-python) -  [Ruby](https://github.com/sendx/sendx-api-ruby) -  [Java](https://github.com/sendx/sendx-api-java) -  [PHP](https://github.com/sendx/sendx-api-php) -  [NodeJS](https://github.com/sendx/sendx-api-nodejs)  We also have a [Javascript API](http://help.sendx.io/knowledge_base/topics/javascript-api-1) for client side integrations.  SendX REST API has two methods:    * Identify   * Track    ## Identify API Method    Identify API Method is used to attach data to a visitor. If a contact is not yet created then we will create the contact. In case contact already exists then we update it.    **Example Request:**       ```json      {         email: \"john.doe@gmail.com\",         firstName: \"John\",         lastName: \"Doe\",         birthday: \"1989-03-03\",         customFields: {           \"Designation\": \"Software Engineer\",           \"Age\": \"27\",           \"Experience\": \"5\"         },         tags: [\"Developer\", \"API Team\"],      }   ```         Note that tags are an array of strings. In case they don't exist previously then API will create them and associate them with the contact.      Similarly if a custom field doesn't exist then it is first created and then associated with the contact along-with the corresponding value. In case custom field exists already then we simply update the value of it for the aforementioned contact.    Custom Fields are associated with data types and which be created and edited inside the app. If a custom field is not present inside the app and an API call is made containing it, a custom field with type 'string' is created and the value set. For custom fields with data type 'number', values can be added to or subtracted from existing values. This can be done by using \"++\" or \"--\" operator before the number(e.g. \"customField_name\": \"++34\" would increase the value of existing \"customField_name\" in SendX for the contact. If it doesn't already exist, the value '34' would be inserted for it).      We don't delete any of the properties based on identify call. What this means is that if for the same contact you did two API calls like:         **API Call A**        ```json      {         email: \"john.doe@gmail.com\",         firstName: \"John\",         birthday: \"1989-03-03\",         customFields: {           \"Designation\": \"Software Engineer\"         },         tags: [\"Developer\"],      }   ```         **API Call B**       ```json      {         email: \"john.doe@gmail.com\",         customFields: {           \"Age\": \"29\"         },         tags: [\"API Team\"],      }   ```         Then the final contact will have firstName as **John**, birthday as **1989-03-03** present. Also both tags **Developer** and **API Team** shall be present along with custom fields **Designation** and **Age**.         **Properties:**      * **firstName**: type string   * **lastName**: type string   * **email**: type string     * **newEmail**: type string     * **company**: type string     * **birthday**: type string with format **YYYY-MM-DD** eg: 2016-11-21     * **customFields**: type map[string]string      * **tags**: type array of string       In case email of an already existing contact needs to be updated then specify current email under email property and updated email under newEmail property.          **Response:**       ```json      {         \"status\": \"200\",         \"message\": \"OK\",         \"data\": {           \"encryptedTeamId\": \"CLdh9Ig5GLIN1u8gTRvoja\",           \"encryptedId\": \"c9QF63nrBenCaAXe660byz\",           \"tags\": [             \"API Team\",             \"Tech\"           ],           \"firstName\": \"John\",           \"lastName\": \"Doe\",           \"email\": \"john.doe@gmail.com\",           \"company\": \"\",           \"birthday\": \"1989-03-03\",           \"customFields\": {             \"Age\": \"29\",             \"Designation\": \"Software Engineer\"           }           }        }   ```         ## Track API Method      Track API Method is used to track a contact. In the track API object you can:      * **addTags**:   * **removeTags**:      You can have automation rules based on tag addition as well as tag removal and they will get executed. For eg:      * On **user registration** tag start onboarding drip for him / her.   * **Account Upgrade** tag start add user to paid user list and start account expansion drip.    * On removal of **trial user** tag start upsell trial completed users drip.         **Example Request:**      >     \\_scq.push([\"track\", {        \"addTags\": [\"blogger\", \"female\"]     }]);           >     \\_scq.push([\"track\", {        \"addTags\": [\"paid user\"],        \"removeTags\": [\"trial user\"]     }]);           **Response:**      >      {       \"status\": \"200\",       \"message\": \"OK\",       \"data\": \"success\"      } 
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/Contact', './model/ContactRequest', './model/ContactResponse', './model/TrackRequest', './model/TrackResponse', './api/ContactApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Contact'), require('./model/ContactRequest'), require('./model/ContactResponse'), require('./model/TrackRequest'), require('./model/TrackResponse'), require('./api/ContactApi'));
  }
}(function(ApiClient, Contact, ContactRequest, ContactResponse, TrackRequest, TrackResponse, ContactApi) {
  'use strict';

  /**
   * NOTE_All_API_calls_contain_2_parameters___api_key_and_team_id__These_can_be_inferred_from_your_settings_page_httpsapp_sendx_iosetting_under_the_sections_Api_Key_and_Team_Id_respectively_For_checking_language_specific_Clients____Golang_httpsgithub_comsendxsendx_api_go____Python_httpsgithub_comsendxsendx_api_python____Ruby_httpsgithub_comsendxsendx_api_ruby____Java_httpsgithub_comsendxsendx_api_java____PHP_httpsgithub_comsendxsendx_api_php____NodeJS_httpsgithub_comsendxsendx_api_nodejsWe_also_have_a__Javascript_API_httphelp_sendx_ioknowledge_basetopicsjavascript_api_1_for_client_side_integrations_SendX_REST_API_has_two_methods___Identify___Track___Identify_API_Method__Identify_API_Method_is_used_to_attach_data_to_a_visitor__If_a_contact_is_not_yet_created_then_we_will_create_the_contact__In_case_contact_already_exists_then_we_update_it___Example_Request____json_____________email_john_doegmail_com________firstName_John________lastName_Doe________birthday_1989_03_03________customFields___________Designation_Software_Engineer__________Age_27__________Experience_5________________tags__Developer_API_Team_____________Note_that_tags_are_an_array_of_strings__In_case_they_dont_exist_previously_then_API_will_create_them_and_associate_them_with_the_contact_____Similarly_if_a_custom_field_doesnt_exist_then_it_is_first_created_and_then_associated_with_the_contact_along_with_the_corresponding_value__In_case_custom_field_exists_already_then_we_simply_update_the_value_of_it_for_the_aforementioned_contact___Custom_Fields_are_associated_with_data_types_and_which_be_created_and_edited_inside_the_app__If_a_custom_field_is_not_present_inside_the_app_and_an_API_call_is_made_containing_it_a_custom_field_with_type_string_is_created_and_the_value_set__For_custom_fields_with_data_type_number_values_can_be_added_to_or_subtracted_from_existing_values__This_can_be_done_by_using__or____operator_before_the_number_e_g__customField_name_34_would_increase_the_value_of_existing_customField_name_in_SendX_for_the_contact__If_it_doesnt_already_exist_the_value_34_would_be_inserted_for_it_____We_dont_delete_any_of_the_properties_based_on_identify_call__What_this_means_is_that_if_for_the_same_contact_you_did_two_API_calls_like______API_Call_A_____json_____________email_john_doegmail_com________firstName_John________birthday_1989_03_03________customFields___________Designation_Software_Engineer________________tags__Developer_____________API_Call_B____json_____________email_john_doegmail_com________customFields___________Age_29________________tags__API_Team_____________Then_the_final_contact_will_have_firstName_as_John_birthday_as_1989_03_03_present__Also_both_tags_Developer_and_API_Team_shall_be_present_along_with_custom_fields_Designation_and_Age_______Properties_____firstName_type_string___lastName_type_string___email_type_string_____newEmail_type_string_____company_type_string_____birthday_type_string_with_format_YYYY_MM_DD_eg_2016_11_21_____customFields_type_map_stringstring______tags_type_array_of_string___In_case_email_of_an_already_existing_contact_needs_to_be_updated_then_specify_current_email_under_email_property_and_updated_email_under_newEmail_property_______Response____json_____________status_200________message_OK________data___________encryptedTeamId_CLdh9Ig5GLIN1u8gTRvoja__________encryptedId_c9QF63nrBenCaAXe660byz__________tags______________API_Team____________Tech____________________firstName_John__________lastName_Doe__________email_john_doegmail_com__________company___________birthday_1989_03_03__________customFields_____________Age_29____________Designation_Software_Engineer____________________________________Track_API_Method____Track_API_Method_is_used_to_track_a_contact__In_the_track_API_object_you_can_____addTags___removeTags____You_can_have_automation_rules_based_on_tag_addition_as_well_as_tag_removal_and_they_will_get_executed__For_eg_____On_user_registration_tag_start_onboarding_drip_for_him__her____Account_Upgrade_tag_start_add_user_to_paid_user_list_and_start_account_expansion_drip_____On_removal_of_trial_user_tag_start_upsell_trial_completed_users_drip_______Example_Request_________scq_push__track________addTags__blogger_female_________________scq_push__track________addTags__paid_user_______removeTags__trial_user____________Response_______________status_200______message_OK______data_success_____.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SendXRestApi = require('index'); // See note below*.
   * var xxxSvc = new SendXRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SendXRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SendXRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SendXRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version v1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Contact model constructor.
     * @property {module:model/Contact}
     */
    Contact: Contact,
    /**
     * The ContactRequest model constructor.
     * @property {module:model/ContactRequest}
     */
    ContactRequest: ContactRequest,
    /**
     * The ContactResponse model constructor.
     * @property {module:model/ContactResponse}
     */
    ContactResponse: ContactResponse,
    /**
     * The TrackRequest model constructor.
     * @property {module:model/TrackRequest}
     */
    TrackRequest: TrackRequest,
    /**
     * The TrackResponse model constructor.
     * @property {module:model/TrackResponse}
     */
    TrackResponse: TrackResponse,
    /**
     * The ContactApi service constructor.
     * @property {module:api/ContactApi}
     */
    ContactApi: ContactApi
  };

  return exports;
}));
