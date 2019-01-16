#import "ViewController.h"
#import <React/RCTRootView.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)loadView {
    [super loadView];
    self.view = [self createReactView];
}

- (UIView *)createReactView {
    NSURL *bundleUrl = [self bundleUrl];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL: bundleUrl
                                                          moduleName: @"App"
                                                   initialProperties: @{}
                                                       launchOptions: nil];
    
    return rootView;
}

- (NSURL *)bundleUrl {
#if TARGET_IPHONE_SIMULATOR
    return [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
#endif

    return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
}

@end
