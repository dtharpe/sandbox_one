//
//  RWTDetailViewController.h
//  Bugs_
//
//  Created by Darryl Tharpe on 4/28/14.
//  Copyright (c) 2014 com.yourname. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface RWTDetailViewController : UIViewController

@property (strong, nonatomic) id detailItem;

@property (weak, nonatomic) IBOutlet UILabel *detailDescriptionLabel;
@end
