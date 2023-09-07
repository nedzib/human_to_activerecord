// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
import StimulusReflex from 'stimulus_reflex'
import { createConsumer } from "@rails/actioncable"
import controller from './application_controller'
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
StimulusReflex.initialize(application, { controller, isolate: true })

let consumer = createConsumer()

consumer.connection.open()

application.consumer = consumer
StimulusReflex.debug = false