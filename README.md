# rollbar-ios issue reproduction

## Setup

iOS dependencies are committed, should only need to `yarn install` or `npm install`

(caveat that locally I had to change line 17 in `./node_modules/rollbar-react-native/RollbarReactNative.podspec` to `s.dependency 'Rollbar', '~> 1.5.0'` pending rollbar-rn release to fix a separate issue)

## Reproduction

* build & run the app with Xcode on a device with the `rnrollbarrepro-release` scheme
* trigger a native crash with the available button
* [view item list for project in rollbar](https://rollbar.com/swj/rn-reproduction/items/)

You'll notice that the crashes reported often collapse material project frames as non-project frames. Some examples:

* https://rollbar.com/swj/rn-reproduction/items/8/
* https://rollbar.com/swj/rn-reproduction/items/7/

The line I'd expect to not be collapsed from the above reports:

`rnrollbarrepro in $S14rnrollbarrepro17EnvironmentModuleC5crashyyFTo (<compiler-generated>:26)`

Additionally the exception / item title isn't all that useful. I'm looking for something like "index out of bounds" in the example we're using.

Occasionally we also don't get dSYMs matching up properly it seems, though I've verified that they upload properly during the build phase:

* https://rollbar.com/swj/rn-reproduction/items/6/occurrences/64245767309/

In this case the following logs were made during the above crash:

```
INFO : KSCrash.m (345): -[KSCrash sendAllReportsWithCompletion:]: Sending 0 crash reports
INFO : KSCrashReport.c (1709): void kscrashreport_writeStandardReport(const KSCrash_MonitorContext *const, const char *const): Writing crash report to /var/mobile/Containers/Data/Application/53E27CBD-1DE6-4148-B281-8ADED12461B9/Library/Caches/KSCrash/rnrollbarrepro/Reports/rnrollbarrepro-report-0000000029000000.json
ERROR: KSMachineContext.c (232): void ksmc_resumeEnvironment(): thread_resume (ffffffff): (ipc/send) invalid destination port
```

It's worth noting that these kinds of (unknown) crashes only appear to happen while it says the app is "Running" in XCode (but the debugger appears detached). Subsequent crashes come through as the ones above.
