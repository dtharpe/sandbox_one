//
//  DTViewController.m
//  Crystal Ball
//
//  Created by Darryl Tharpe on 6/23/14.
//  Copyright (c) 2014 dtharpe. All rights reserved.
//

#import "DTViewController.h"

@interface DTViewController ()

@end

@implementation DTViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


- (IBAction)buttonPressed {
    self.predictionLabel.text = @"Yes";
}
@end
