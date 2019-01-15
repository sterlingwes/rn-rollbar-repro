import Foundation
import React

@objc(EnvironmentModule)
class EnvironmentModule: NSObject, ReactModule, RCTBridgeModule {
    static func moduleName() -> String! {
        return "EnvironmentModule"
    }
    
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
    
    var methodQueue: DispatchQueue {
        return .main
    }
    
    func constantsToExport() -> [AnyHashable: Any]! {
        return [
            "BUILD_VERSION": Bundle.main.object(forInfoDictionaryKey: kCFBundleVersionKey as String) as! String,
            "ROLLBAR_CLIENT_TOKEN": RollbarInitializer.clientToken(),
        ]
    }
}
