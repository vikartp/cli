#!/usr/bin/env node
// const program = require('commander');
// const { prompt } = require('inquirer');
// const { addCustomer, findCustomer } = require('./index');
import { program } from 'commander';
import inquirer from 'inquirer';
import * as Operations from './index.cjs';
import { createFiles } from './createFiles.cjs';

// Customer Questions

const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Customer First Name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Customer Last Name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer Phone Number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer Email Address'
    }
]

program
    .version('1.0.0')
    .description('Customer CRUD Tool')

// Hi Command
program
    .command('hi <name>')
    .description('Say hi in console')
    .action(name => {
        console.log(`Hi ${name}, You are awesome 🙏😅😁`);
        // console.log(process.argv);
        process.exit();
    })

// Create files
program
    .command('createFiles <source>')
    .alias('cf')
    .description('Create files for a specific source')
    .action(source => {
        createFiles(source);
        process.exit();
    })

/**
 * Using just 'commander.js' for cusstomer input in one line
 */
program
    .command('addInOneLine <firstname> <lastname> <phone> <email>')
    .alias('aiol')
    .description('Add a customer')
    .action((firstname, lastname, phone, email) => {
        Operations.addCustomer({ firstname, lastname, phone, email });
    })


/**
 * Add command Using 'inquirer'
 */
program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action(() => {
        inquirer.prompt(questions)
            .then(answers => {
                Operations.addCustomer(answers)
            })
    })
// Find Command
program
    .command('find <name>')
    .alias('f')
    .description('Find a customer')
    .action(name => {
        Operations.findCustomer(name);
    })

// Update Command
program
    .command('update <_id>')
    .alias('u')
    .description('Update a customer')
    .action(_id => {
        inquirer.prompt(questions)
            .then(answers => {
                Operations.updateCustomer(_id, answers)
            })
    })

// Remove Command
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a customer')
    .action(_id => {
        Operations.removeCustomer(_id);
    })

// List Customers
program
    .command('list')
    .alias('l')
    .description('List all customers')
    .action(() => {
        Operations.listCustomer();
    })

// program.parse(process.argv); // might be required
program.parse();
// process.exit(); // might be required