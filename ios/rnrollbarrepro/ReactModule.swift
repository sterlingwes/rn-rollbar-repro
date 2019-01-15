import React

protocol ReactModule {
    var module: RCTBridgeModule { get }
}

extension ReactModule {
    var module: RCTBridgeModule {
        // the conformance to RCTBridgeModule is in objc so Swift doesn't
        // know about it, so we just force it here
        return self as! RCTBridgeModule
    }
    
    func postNotification(notification: String, info: [String: Any]? = nil) {
        let name = NSNotification.Name(rawValue: notification)
        NotificationCenter.default.post(name: name, object: nil, userInfo: info)
    }
}
