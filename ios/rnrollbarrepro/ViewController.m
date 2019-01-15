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
    NSURL *bundleUrl = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL: bundleUrl
                                                          moduleName: @"App"
                                                   initialProperties: @{}
                                                       launchOptions: nil];
    
    return rootView;
}


@end
